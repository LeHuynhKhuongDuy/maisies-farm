#!/usr/bin/env python3
"""Tách nền trắng của ảnh AI vẽ -> PNG nền trong suốt, cắt sát hình, thu nhỏ.

Cách dùng: python3 scripts/cutout.py <ảnh vào hoặc URL> <tên ra> [cạnh tối đa] [ngưỡng] [holes]
Kết quả: public/sprites/<tên ra>.webp
"""
import io, sys, urllib.request
from collections import deque
import numpy as np
from PIL import Image, ImageFilter


def cut(img, thr=222, holes=False):
    """Ảnh RGB nền trắng -> ảnh RGBA đã bỏ nền và cắt sát hình."""
    a = np.asarray(img).astype(np.int16)
    h, w, _ = a.shape

    # Điểm "giống nền": sáng và gần như không màu
    mx, mn = a.max(axis=2), a.min(axis=2)
    bgish = (mn > thr) & ((mx - mn) < (26 if thr <= 222 else 12))

    # Loang từ mép ảnh qua các điểm giống nền (giữ lại phần trắng nằm bên trong hình, vd. mây, tường trắng)
    bg = np.zeros((h, w), bool)
    q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if bgish[y, x] and not bg[y, x]: bg[y, x] = True; q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if bgish[y, x] and not bg[y, x]: bg[y, x] = True; q.append((y, x))
    while q:
        y, x = q.popleft()
        for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            ny, nx = y + dy, x + dx
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx] and bgish[ny, nx]:
                bg[ny, nx] = True; q.append((ny, nx))

    # Tuỳ chọn 'holes': xoá cả khe trắng bị bao kín (vd. giữa các nhánh cây) nếu đủ lớn và rất trắng
    if holes:
        white = (mn > 240) & ((mx - mn) < 12) & ~bg
        seen = np.zeros((h, w), bool)
        for sy, sx in zip(*np.nonzero(white)):
            if seen[sy, sx]: continue
            comp = []; dq = deque([(sy, sx)]); seen[sy, sx] = True
            while dq:
                y, x = dq.popleft(); comp.append((y, x))
                for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ny, nx = y + dy, x + dx
                    if 0 <= ny < h and 0 <= nx < w and white[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True; dq.append((ny, nx))
            if len(comp) > 250:
                for y, x in comp: bg[y, x] = True

    alpha = np.where(bg, 0, 255).astype(np.uint8)
    # Mép mềm: làm mờ nhẹ kênh alpha rồi siết lại để không lem viền trắng
    am = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(1.2))
    alpha = np.asarray(am).astype(np.float32)
    alpha = np.clip((alpha - 60) * (255 / 150), 0, 255).astype(np.uint8)

    out = Image.fromarray(np.dstack([np.asarray(img), alpha]), 'RGBA')
    bbox = out.getbbox()
    return out.crop(bbox) if bbox else out


def save(out, name, max_side=512, folder='sprites', square=False):
    out.thumbnail((max_side, max_side), Image.LANCZOS)
    if square:  # biểu tượng: đặt giữa khung vuông trong suốt
        s = max(out.size); sq = Image.new('RGBA', (s, s), (0, 0, 0, 0))
        sq.alpha_composite(out, ((s - out.width) // 2, (s - out.height) // 2)); out = sq
    dst = f'public/{folder}/{name}.webp'
    # WebP nén có kênh trong suốt giữ nguyên: nhẹ hơn PNG ~6 lần, nhìn không khác
    out.save(dst, 'WEBP', quality=88, alpha_quality=100, method=6)
    print(dst, out.size)


def load(src):
    data = urllib.request.urlopen(src).read() if src.startswith('http') else open(src, 'rb').read()
    return Image.open(io.BytesIO(data)).convert('RGB')


if __name__ == '__main__':
    src, name = sys.argv[1], sys.argv[2]
    max_side = int(sys.argv[3]) if len(sys.argv) > 3 else 512
    # ngưỡng 'trắng nền' (tăng lên cho hình có màu trắng kem như con gà)
    thr = int(sys.argv[4]) if len(sys.argv) > 4 else 222
    save(cut(load(src), thr, 'holes' in sys.argv[5:]), name, max_side)
