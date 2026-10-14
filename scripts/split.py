#!/usr/bin/env python3
"""Cắt một ảnh lưới (nhiều món vẽ chung, nền trắng) thành từng hình riêng.

Cách dùng: python3 scripts/split.py <ảnh vào> <tên1,tên2,...> [cạnh tối đa] [ngưỡng] [holes]
Tên xếp theo thứ tự đọc (trái sang phải, trên xuống dưới); dùng '-' để bỏ qua một món.
Mỗi món lưu thành public/sprites/<tên>.png
"""
import os, sys
import numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cutout import cut, save, load


def runs(mask, min_gap, min_len):
    """Các đoạn liên tiếp có nội dung, gộp đoạn cách nhau quá gần, bỏ đoạn quá ngắn."""
    segs, start = [], None
    for i, v in enumerate(list(mask) + [False]):
        if v and start is None: start = i
        if not v and start is not None: segs.append([start, i]); start = None
    merged = []
    for s in segs:
        if merged and s[0] - merged[-1][1] < min_gap: merged[-1][1] = s[1]
        else: merged.append(s)
    return [s for s in merged if s[1] - s[0] >= min_len]


src, names = sys.argv[1], sys.argv[2].split(',')
max_side = int(sys.argv[3]) if len(sys.argv) > 3 else 512
thr = int(sys.argv[4]) if len(sys.argv) > 4 else 222
holes = 'holes' in sys.argv[5:]

img = load(src)
a = np.asarray(img).astype(np.int16)
h, w, _ = a.shape
mx, mn = a.max(axis=2), a.min(axis=2)
fg = ~((mn > 236) & ((mx - mn) < 14))  # điểm có màu = thuộc một món nào đó

gap, short = max(8, h // 60), max(20, h // 30)
boxes = []
for y0, y1 in runs(fg.sum(axis=1) > 2, gap, short):
    for x0, x1 in runs(fg[y0:y1].sum(axis=0) > 2, gap, short):
        # thu hẹp lại theo chiều dọc cho riêng món này
        ys = runs(fg[y0:y1, x0:x1].sum(axis=1) > 2, gap, short)
        if ys: boxes.append((x0, y0 + ys[0][0], x1, y0 + ys[-1][1]))

if len(boxes) != len(names):
    print(f'Tìm thấy {len(boxes)} món nhưng có {len(names)} tên:', boxes)
    sys.exit(1)

pad = 12
for (x0, y0, x1, y1), name in zip(boxes, names):
    if name == '-': continue
    crop = img.crop((max(0, x0 - pad), max(0, y0 - pad), min(w, x1 + pad), min(h, y1 + pad)))
    save(cut(crop, thr, holes), name, max_side)
