#!/usr/bin/env python3
"""Tách nền trắng của ảnh AI vẽ -> PNG nền trong suốt, cắt sát hình, thu nhỏ.

Cách dùng: python3 scripts/cutout.py <ảnh vào hoặc URL> <tên ra> [cạnh tối đa]
Kết quả: public/sprites/<tên ra>.png
"""
import io, sys, urllib.request
from collections import deque
import numpy as np
from PIL import Image, ImageFilter

src, name = sys.argv[1], sys.argv[2]
max_side = int(sys.argv[3]) if len(sys.argv) > 3 else 512
# ngưỡng 'trắng nền' (tăng lên cho hình có màu trắng kem như con gà)
thr = int(sys.argv[4]) if len(sys.argv) > 4 else 222

data = urllib.request.urlopen(src).read() if src.startswith('http') else open(src, 'rb').read()
img = Image.open(io.BytesIO(data)).convert('RGB')
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

alpha = np.where(bg, 0, 255).astype(np.uint8)
# Mép mềm: làm mờ nhẹ kênh alpha rồi siết lại để không lem viền trắng
am = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(1.2))
alpha = np.asarray(am).astype(np.float32)
alpha = np.clip((alpha - 60) * (255 / 150), 0, 255).astype(np.uint8)

rgba = np.dstack([np.asarray(img), alpha])
out = Image.fromarray(rgba, 'RGBA')
bbox = out.getbbox()
if bbox: out = out.crop(bbox)
out.thumbnail((max_side, max_side), Image.LANCZOS)
dst = f'public/sprites/{name}.png'
out.save(dst, optimize=True)
print(dst, out.size)
