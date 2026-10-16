# Maisie's Farm

Game nông trại bên bờ biển cho bé Maisie, chơi trên điện thoại (iPhone và Android) và máy tính.

**Chơi tại:** https://lehuynhkhuongduy.github.io/maisies-farm/

## Cài lên điện thoại
- **iPhone/iPad:** mở link bằng Safari → nút Chia sẻ → "Thêm vào MH chính".
- **Android:** mở link bằng Chrome → menu ⋮ → "Cài đặt ứng dụng" (hoặc "Thêm vào màn hình chính").

Sau lần mở đầu tiên, game chơi được cả khi không có mạng. Tiến độ lưu trên từng máy.

## Cách chơi
- **Ván mới:** nhà, lò bánh và chiếc thuyền bị bão làm đổ nát; làm theo hướng dẫn 10 bước (bàn tay chỉ đường) để chặt cây, góp vật liệu và sửa lại từng thứ.
- **Chặt cây, dọn đảo:** chạm (hoặc giữ ngón tay) vào bụi cỏ, cây, đá, gò đất sét để chặt; mỗi nhát tốn năng lượng. Vật cản rơi ra **vật liệu** (gỗ, đá, tre, lá cọ, đất sét, dây leo), thỉnh thoảng có rương. Bụi cỏ, bụi rậm, bụi tre (đôi khi rơi dây leo), gốc cây, tảng đá, gò đất sét mọc lại trong vùng đã mở, nên vật liệu thô không bao giờ hết.
- **Năng lượng** nằm ở giữa phía trên màn hình, tự hồi theo thời gian (tối đa tăng theo cấp). Hết thì **nhặt sao biển, vỏ sò, cua trên bãi cát** quanh đảo, hoặc ăn bánh, súp, pizza.
- **Xây theo giai đoạn:** công trình mới hiện ra thành công trường; chạm để góp đủ vật liệu cho từng giai đoạn là xây xong. Vật liệu nằm trong thẻ Vật liệu của Kho, không tính vào sức chứa.
- **Xưởng mộc, nhà đan lát:** làm ván, củi, giá gỗ, giỏ, chiếu, dây thừng, đuốc từ vật liệu thô.
- **Mở rừng dưới mây:** rừng phía Tây, phía Bắc và Rừng già bị mây che. Sửa cầu tre, cầu gỗ, bậc đá (mũi tên cam chỉ chỗ) thì mây tan, có thêm đất để dọn và xây.
- **Nhà tiều phu:** người đốn gỗ tự gom gỗ, tre, lá cọ, dây leo vào túi, chạm để lấy; nâng cấp để túi to hơn.
- **Ruộng:** chạm ô trống để chọn hạt, kéo ngón tay qua nhiều ô để gieo liền; cây chín thì chạm hoặc kéo qua để thu hoạch.
- **Chuồng gà, bò, heo, vườn ong:** máy xay làm thức ăn; chạm chuồng để cho ăn, chạm lại để nhặt trứng, sữa, nấm, mật ong.
- **Nhà máy:** lò bánh, xưởng sữa, quầy nước ép, quán hải sản, bếp nấu, tiệm bánh ngọt, nhà làm mứt.
- **Bán hàng:** bảng đơn hàng, tàu chở hàng 6 thùng, khách ghé thăm, quầy chợ ven đường.
- **Câu cá** ở cầu tàu bên phải đảo.
- **Phiêu lưu:** đi thuyền tới 5 hòn đảo, dọn đường bằng năng lượng, tìm rương báu, giải cứu bạn thú.
- **Hàng xóm:** ghé 5 nông trại, giúp 5 lượt mỗi ngày để nhận quà.
- **Lễ hội Biển** hằng tuần, **sổ sưu tập**, **lịch quà 7 ngày**.
- Giữ lâu một công trình để di chuyển; đồ trang trí có thể xoay hoặc cất vào túi.
- **Cài đặt → Chuyển sang máy khác:** lấy mã sao lưu để mang nông trại sang điện thoại khác (bản lưu cũ vẫn mở được, giữ nguyên cấp, kho và công trình).

## Phát triển
```bash
npm install
npm run dev
```
Đăng bản mới lên GitHub Pages: `npm run deploy` (build rồi đẩy thư mục `dist` lên nhánh `gh-pages`).

## Ghi công
Toàn bộ hình trong game là hình 2D vẽ tay (AI vẽ, ảnh WebP trong `public/sprites` và `public/items`). Game không còn tải mô hình 3D nào; các bộ 3D [Kenney.nl](https://kenney.nl) và [KayKit](https://kaylousberg.itch.io) (giấy phép CC0) từng dùng ở những bản đầu vẫn còn trong lịch sử git, và tên các mô hình đó còn dùng làm khóa tra hình thay thế trong mã. Món nào chưa có hình vẽ riêng thì mượn hình có sẵn gần nghĩa; danh sách hình cần vẽ thêm để trong thư mục `art-in/` (không đưa lên git).
