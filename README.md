# Maisie's Farm

Game nông trại bên bờ biển cho bé Maisie, chơi trên điện thoại (iPhone và Android) và máy tính.

**Chơi tại:** https://lehuynhkhuongduy.github.io/maisies-farm/

## Cài lên điện thoại
- **iPhone/iPad:** mở link bằng Safari → nút Chia sẻ → "Thêm vào MH chính".
- **Android:** mở link bằng Chrome → menu ⋮ → "Cài đặt ứng dụng" (hoặc "Thêm vào màn hình chính").

Sau lần mở đầu tiên, game chơi được cả khi không có mạng. Tiến độ lưu trên từng máy.

## Cách chơi
- **Ruộng:** chạm ô trống để chọn hạt, kéo ngón tay qua nhiều ô để gieo liền; cây chín thì chạm hoặc kéo qua để thu hoạch.
- **Chuồng gà, bò, heo, vườn ong:** máy xay làm thức ăn; chạm chuồng để cho ăn, chạm lại để nhặt trứng, sữa, nấm, mật ong.
- **Nhà máy:** lò bánh, xưởng sữa, quầy nước ép, quán hải sản, bếp nấu, tiệm bánh ngọt, nhà làm mứt.
- **Bán hàng:** bảng đơn hàng, tàu chở hàng 6 thùng, khách ghé thăm, quầy chợ ven đường.
- **Câu cá** ở cầu tàu bên phải đảo.
- **Phiêu lưu:** đi thuyền tới 5 hòn đảo, dọn đường bằng năng lượng, tìm rương báu, giải cứu bạn thú.
- **Hàng xóm:** ghé 5 nông trại, giúp 5 lượt mỗi ngày để nhận quà.
- **Lễ hội Biển** hằng tuần, **sổ sưu tập**, **lịch quà 7 ngày**.
- Giữ lâu một công trình để di chuyển; đồ trang trí có thể xoay hoặc cất vào túi.
- **Cài đặt → Chuyển sang máy khác:** lấy mã sao lưu để mang nông trại sang điện thoại khác.

## Phát triển
```bash
npm install
npm run dev
```
Đăng bản mới lên GitHub Pages: `npm run deploy` (build rồi đẩy thư mục `dist` lên nhánh `gh-pages`).

## Ghi công
Hình 2D vẽ tay (AI vẽ, ảnh WebP trong `public/sprites` và `public/items`). Hai khóm hoa 3D còn lại trong vườn ong lấy từ [Kenney.nl](https://kenney.nl) Nature Kit (giấy phép CC0); các bộ 3D Kenney/KayKit dùng trước đây vẫn còn trong lịch sử git.
