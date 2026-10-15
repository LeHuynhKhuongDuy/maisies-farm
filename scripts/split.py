#!/usr/bin/env python3
"""Cắt một ảnh lưới (nhiều món vẽ chung, nền trắng) thành từng hình riêng.

Cách dùng: python3 scripts/split.py <ảnh vào> <tên1,tên2,...> [cạnh tối đa] [ngưỡng] [holes]
Tên xếp theo thứ tự đọc (trái sang phải, trên xuống dưới); dùng '-' để bỏ qua một món.
Mỗi món lưu thành public/sprites/<tên>.png; thêm 'icons' để lưu biểu tượng vuông vào public/items/
"""
import os, sys
import numpy as np
from scipy import ndimage
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cutout import cut, save, load


src, names = sys.argv[1], sys.argv[2].split(',')
max_side = int(sys.argv[3]) if len(sys.argv) > 3 else 512
thr = int(sys.argv[4]) if len(sys.argv) > 4 else 222
holes = 'holes' in sys.argv[5:]
icons = 'icons' in sys.argv[5:]

img = load(src)
a = np.asarray(img).astype(np.int16)
h, w, _ = a.shape
mx, mn = a.max(axis=2), a.min(axis=2)
fg = ~((mn > 236) & ((mx - mn) < 14))  # điểm có màu = thuộc một món nào đó

# Mỗi món là một mảng màu liền khối (các món không chạm nhau)
lab, n = ndimage.label(ndimage.binary_dilation(fg, iterations=3))
objs = ndimage.find_objects(lab)
sizes = ndimage.sum(np.ones_like(lab), lab, range(1, n + 1))
comps = [[sl[1].start, sl[0].start, sl[1].stop, sl[0].stop, a] for sl, a in zip(objs, sizes)]
# mảng quá nhỏ (dây câu, giọt nước, tia lấp lánh) gộp vào món gần nhất
big = max(c[4] for c in comps)
main = [c for c in comps if c[4] >= big * 0.04]
# mảng nằm trọn trong khung của món khác (vd. phần cùi trắng giữa nửa trái dừa) là một phần của món đó
inside = lambda c, m: c is not m and m[0] <= c[0] and m[1] <= c[1] and c[2] <= m[2] and c[3] <= m[3]
main = [c for c in main if not any(inside(c, m) for m in main)]
for c in comps:
    if c in main: continue
    cx, cy = (c[0] + c[2]) / 2, (c[1] + c[3]) / 2
    def dist(m): return max(m[0] - cx, 0, cx - m[2]) + max(m[1] - cy, 0, cy - m[3])
    m = min(main, key=dist)
    m[0], m[1], m[2], m[3] = min(m[0], c[0]), min(m[1], c[1]), max(m[2], c[2]), max(m[3], c[3])
# thứ tự đọc: gom theo hàng (tâm dọc gần nhau), rồi trái sang phải
main.sort(key=lambda m: (m[1] + m[3]) / 2)
medh = sorted(m[3] - m[1] for m in main)[len(main) // 2]
rows = []
for m in main:
    cy = (m[1] + m[3]) / 2
    if rows and cy - rows[-1][0] < medh * 0.5: rows[-1][1].append(m)
    else: rows.append([cy, [m]])
boxes = [tuple(m[:4]) for _, r in rows for m in sorted(r, key=lambda m: m[0])]

if len(boxes) != len(names):
    print(f'Tìm thấy {len(boxes)} món nhưng có {len(names)} tên:', boxes)
    sys.exit(1)

pad = 12
for (x0, y0, x1, y1), name in zip(boxes, names):
    if name == '-': continue
    crop = img.crop((max(0, x0 - pad), max(0, y0 - pad), min(w, x1 + pad), min(h, y1 + pad)))
    save(cut(crop, thr, holes), name, max_side, 'items' if icons else 'sprites', icons)
