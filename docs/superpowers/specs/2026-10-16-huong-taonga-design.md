# Thiết kế: Maisie's Farm theo hướng Taonga

Ngày 16/10/2026. Tài liệu nghiên cứu đi kèm: [docs/nghien-cuu/2026-10-16-taonga-gameplay.md](../../nghien-cuu/2026-10-16-taonga-gameplay.md).

## 1. Ý định và lý do

Người dùng muốn Maisie's Farm có **cách chơi giống Taonga: The Island Farm**, càng đầy đủ càng tốt. Game hiện tại là game trồng trọt kiểu Family Farm Seaside (gieo, thu, nhà máy, đơn hàng, tàu hàng). Taonga khác ở chỗ trọng tâm là **khai hoang một hòn đảo rừng rậm**: dùng năng lượng chặt cây, đập đá, nhặt được **vật liệu**, chế biến vật liệu qua các xưởng, rồi **sửa và xây công trình theo từng giai đoạn**. Kèm theo đó là **nhiệm vụ có nhân vật dẫn truyện** và **đi thuyền sang các đảo có câu chuyện riêng**.

Người chơi là bé Maisie, trên điện thoại. Người dùng (phụ huynh) đã nói: **mức năng lượng sẽ chỉnh sau khi làm xong**, nên các con số năng lượng trong tài liệu này chỉ là điểm bắt đầu.

## 2. Mục tiêu

1. Mở game là thấy cảm giác "đảo hoang cần khai phá": đảo nhà phủ rừng, có công trình đổ nát, vùng chưa mở bị mây che.
2. Vòng chơi chính: chạm vật cản → nhân vật tới chặt → rơi vật liệu → góp vật liệu sửa/xây công trình → công trình mở thêm việc để làm.
3. Có chuỗi nhiệm vụ do nhân vật dẫn truyện, hiện thành cột chân dung bên trái màn hình.
4. Đi thuyền sang đảo khác, mỗi đảo một câu chuyện nhỏ, sương mù lùi dần khi dọn.
5. Giữ nguyên mọi thứ đang chạy tốt: trồng trọt, chuồng trại, nhà máy, đơn hàng, tàu hàng, câu cá, lễ hội, sưu tập, chơi không cần mạng.

## 3. Không làm (non-goals)

- **Không sao chép** hình ảnh, tên game, tên nhân vật (Samantha, Rangi, Taine…), cốt truyện "lá thư của chú", tiền florin, nhạc hay âm thanh của Taonga. Cách chơi thì làm theo; nội dung là của mình.
- Không có người chơi thật: không hàng xóm thật, không bảng xếp hạng, không máy chủ, không tài khoản. Hàng xóm giả hiện có giữ nguyên.
- Không mua bằng tiền thật, không quảng cáo, không ưu đãi đếm ngược.
- Các vùng cuối game của Taonga (Đầm phá, Hầm mỏ, Kim tự tháp, thẻ mùa 70 cấp) không nằm trong đợt này.

## 4. Điều tuyệt đối tránh (anti-goals)

Những thứ sau sẽ là thất bại dù code chạy đúng:
- Bé bị **kẹt**: hết năng lượng mà không còn việc gì làm, hoặc nhiệm vụ đòi thứ không có cách nào lấy được.
- Nhiệm vụ có **giới hạn thời gian**, hay thứ gì đó tạo áp lực trả tiền / bỏ qua bằng kim cương.
- **Mất tiến độ** của nông trại bé đang chơi.
- Màn hình rối: chữ nhỏ, nút chồng lên nhau ở khổ 375 px.

## 5. Ràng buộc

- Giữ nền tảng hiện có: JavaScript thuần + Three.js + Vite, PWA chơi không cần mạng, lưu trong máy (`localStorage`, khóa `maisies-farm-v1`), đăng trên GitHub Pages.
- Hình vẽ tay theo quy trình đang dùng: người dùng vẽ bằng AI theo câu lệnh trong `art-in/danh-sach-hinh-*.txt`, rồi cắt nền bằng `scripts/cutout.py`. Mọi hình mới phải cùng phong cách với các hình đã có. Mỗi giai đoạn phải kèm **danh sách hình cần vẽ**. Khi chưa có hình thì dùng hình tạm (hình có sẵn tô màu khác, hoặc khối đơn giản) để code không bị chặn.
- Chữ trong game bằng tiếng Việt, câu ngắn, dễ hiểu với trẻ nhỏ.
- Màn hình chính là điện thoại dọc 375×812; vẫn chạy được ở khổ ngang và máy tính bảng.

## 6. Phần người dùng đã quyết

- Làm theo cách chơi của Taonga càng đầy đủ càng tốt.
- Năng lượng chỉnh sau; trước mắt cứ làm theo kiểu Taonga.
- Được chia việc thành nhiều lane chạy song song (cách làm đã dùng ở các đợt trước).

## 7. Thiết kế theo từng giai đoạn

Làm lần lượt A → B → C → D. Mỗi giai đoạn chơi được trọn vẹn và có thể đăng lên web riêng.

### Giai đoạn A: Khai hoang và xây bằng vật liệu (lõi)

**A1. Vật liệu thô.** Thêm vào kho các món: **gỗ, đá, tre, lá cọ, đất sét**, và **dây leo** (hiếm, thỉnh thoảng rơi khi chặt cây). Vật liệu có biểu tượng riêng và hiện trong Kho ở một thẻ "Vật liệu". (Quyết định của mình.) Vật liệu thô và vật liệu bậc 2 **không tính vào sức chứa Kho** và không có giới hạn, để bé chặt cây không bao giờ bị "kho đầy". Sức chứa Kho hiện có chỉ áp dụng cho nông sản và thành phẩm như cũ.

**A2. Vật cản nhiều nhát.**
- Mỗi vật cản có số **nhát** (máu). Ví dụ điểm bắt đầu: bụi cỏ 2, gốc cây 3, tảng đá nhỏ 4, cây rừng 6, cây to / đá to 10–15.
- Mỗi nhát tốn **1 năng lượng** và rơi ra vật liệu tương ứng: cỏ ra lá cọ, cây ra gỗ (đôi khi dây leo), tre ra tre, đá ra đá, gò đất ra đất sét. Thỉnh thoảng rơi xu và sao kinh nghiệm.
- Vật cản có thanh máu nhỏ khi đang chặt; hình rung và nhỏ dần theo số nhát còn lại.
- Dọn hết một vật lớn thì có xác suất rơi **rương** (năng lượng, xu, vật liệu).
- Có dòng cộng dồn ở góc màn hình kiểu "+3 Gỗ +1 Dây leo".
- **Giữ ngón tay** trên vật cản thì chặt liên tục (thay cho nút x3/x5 của Taonga, hợp với bé hơn).
- Vật cản mới **mọc lại** chậm ở vùng đã mở, để luôn có vật liệu (tre, bụi cỏ).

**A3. Nhân vật đi tới chỗ làm.** Khi chạm vật cản, Maisie đi bộ tới cạnh ô đó rồi mới chặt (có thể xếp hàng nhiều việc). Ruộng, chuồng, nhà máy giữ cách chạm như hiện nay (không cần đi bộ) để khỏi chậm.

**A4. Xưởng vật liệu bậc 2.** Hai xưởng mới, chạy như nhà máy hiện có:
- **Xưởng mộc:** ván (gỗ), giá gỗ (gỗ + dây leo), củi (gỗ).
- **Nhà đan lát:** giỏ (lá cọ), chiếu (lá cọ + tre), dây thừng (dây leo + lá cọ), đuốc (củi + lá cọ).
Thời gian sản xuất ngắn hơn Taonga nhiều (cỡ 30 giây – 3 phút, cùng thang với nhà máy hiện tại).

**A5. Xây theo giai đoạn.**
- Công trình mua ở cửa hàng bằng xu như cũ, nhưng khi đặt xuống thì thành **công trường** (hình giàn giáo).
- Chạm công trường mở bảng **góp vật liệu**: mỗi giai đoạn 2–3 ô dạng 0/5, nút "Góp" cho từng ô, xong giai đoạn có lấp lánh và kinh nghiệm. 1–3 giai đoạn tùy công trình.
- Áp dụng cho công trình **mua mới**: xưởng mới, nhà máy, chuồng, cầu/công trình mở vùng, và **công trình đổ nát** có sẵn trên đảo. Nâng cấp kho giữ cách hiện có.
- Không để bé kẹt: vật liệu cho giai đoạn đầu của mọi công trình phải lấy được từ những thứ đã có tại cấp mở công trình đó (vật cản mọc lại, người đốn gỗ, xưởng đã mở).

**A6. Đảo nhà rậm rạp và mở vùng.**
- **Đảo rộng ra.** (Quyết định của mình.) Vùng 26×26 hiện có giữ nguyên làm **vùng lõi**. Thêm các **vùng rừng mới bao quanh** (ví dụ đảo thành khoảng 40×40), chia 3–4 vùng, ban đầu phủ mây. Mỗi vùng mở bằng một công trình chặn đường (cầu tre, bậc đá…) hoặc đạt cấp. Nhờ vậy cả ván mới lẫn bản lưu cũ đều có rừng để khai hoang, và đất trồng trọt ban đầu không bị chật. Việc này đụng tới hệ tọa độ, cách vẽ đất và biển, giới hạn camera và bản lưu, nên phải làm **trước tiên** trong giai đoạn A, trước khi chia lane.
- **Ván mới:** đảo bắt đầu với khoảng 2/3 diện tích là rừng (cây, tre, bụi, đá, gò đất). Có sẵn vài **công trình đổ nát**: nhà của Maisie, bếp, thuyền nhỏ ở bến. Phần hướng dẫn đầu game đi theo trình tự: sửa nhà → trồng lúa → cho gà ăn → sửa bếp → mua xưởng mộc làm ván → sửa thuyền → ra khơi lần đầu (khoảng 10–15 phút).
- **Vùng bị mây che:** đảo chia 3–4 vùng. Vùng chưa mở có mây trắng phủ và mũi tên chỉ hướng. Mở vùng bằng cách xây xong một công trình chặn đường (ví dụ cầu tre) hoặc đạt cấp.

**A7. Năng lượng.**
- Thanh năng lượng chuyển lên **giữa phía trên** màn hình.
- Hồi theo thời gian như hiện có; giới hạn tăng dần theo cấp.
- Nguồn thêm: **ăn món ăn** làm ở bếp/lò (mỗi món cho số năng lượng riêng); **nhặt sao biển, vỏ sò, cua** xuất hiện lại theo thời gian dọc bờ biển; rương khi dọn vật cản; phần thưởng nhiệm vụ.
- Các con số cụ thể để người dùng chỉnh sau (xem mục 1).

**A8. Người đốn gỗ (người giúp việc).** Công trình tự gom gỗ, tre, lá cọ theo thời gian cho tới khi đầy; chạm để nhận. Có thể nâng cấp sức chứa.

**A9. Tiến độ đang chơi.** (Quyết định của mình, xem mục 9.) Nông trại đang có **giữ nguyên** trong vùng lõi: mọi công trình hiện có coi như đã xây xong, vật cản hiện có được đổi sang loại mới có nhiều nhát, người chơi được tặng một ít vật liệu khởi đầu. Các vùng rừng mới bao quanh (A6) được thêm vào bản lưu cũ y như ván mới, nên luôn có chỗ khai hoang. Phần sửa nhà đổ nát và hướng dẫn đầu game chỉ áp dụng cho **ván chơi mới**.

**A10. Món ăn hồi năng lượng từ đầu game.** Hiện món ăn chỉ mở từ cấp 5–6; cần ít nhất một món ăn hồi năng lượng làm được từ cấp 1–2 (ví dụ bánh mì ở bếp đổ nát vừa sửa).

### Giai đoạn B: Nhiệm vụ có truyện

- Thay chuỗi nhiệm vụ tuyến tính một-việc-một-lúc bằng **nhiều nhiệm vụ cùng lúc** (2–4), mỗi nhiệm vụ có 1–3 yêu cầu dạng 0/10.
- **Cột nhiệm vụ bên trái**: icon tròn có chân dung nhân vật, có dấu tích khi xong.
- **Hội thoại**: chân dung lớn của nhân vật, khung chữ ở dưới, chạm để đi tiếp, nút bỏ qua.
- Nhiệm vụ đi theo **mạch truyện** (ví dụ "Sửa lại ngôi nhà cũ", "Chiếc thuyền của ông") và mở dần theo cấp hoặc khi xây xong công trình.
- Mỗi yêu cầu có nút **"Chỉ cho bé"**: camera bay tới chỗ cần làm.
- Cốt truyện của riêng Maisie's Farm, dùng các nhân vật đang có (Maisie, Tom, Lily, Ben, Rosa, Sam) và thêm 1–2 người dân đảo. Bối cảnh gợi ý: đảo của ông bà Maisie bị bão làm hư hại, Maisie về sửa lại.
- **Nhiệm vụ hằng ngày**: 5–6 việc nhỏ, xong hết có quà; không có đồng hồ ép.

### Giai đoạn C: Đi đảo có truyện

- (Quyết định của mình.) **Giữ** 5 đảo Phiêu lưu hiện có cùng tiến độ đã lưu và các con vật thưởng; chúng nằm trên hải đồ cạnh **3 đảo có truyện mới**. Không xóa hay viết lại đảo cũ, chỉ chuyển chúng vào hải đồ.
- Trong giai đoạn A, nút "ra khơi" ở cuối phần hướng dẫn tạm dẫn tới màn Phiêu lưu cũ.
- **Hải đồ**: chạm thuyền mở bản đồ các đảo; đảo khóa theo cấp hoặc theo nhiệm vụ, có gợi ý mở khóa.
- **Trên đảo**: sương mù phủ, dọn vật cản ở mép thì sương lùi; người dân đảo giao chuỗi nhiệm vụ riêng của đảo đó; có thú dẫn đường; có công trình đổ nát của đảo cần góp vật liệu để sửa.
- **Vật liệu nhặt ở đảo xa** dùng ngay tại đó, phần dư tự về kho nhà khi về. **Bỏ** cân nặng khoang thuyền và lương thực của Taonga (người lớn cũng than rắc rối).
- Sửa xong đảo được **phần thưởng lâu dài** mang về đảo nhà (đồ trang trí đặc biệt, hoặc thứ sinh năng lượng như hoa sen của Taonga).
- Đảo đã xong có thể quay lại để nhặt vật liệu (vật cản mọc lại).
- Ba đảo đầu: làng chài (cấp thấp, truyện đuổi theo một con vật nghịch ngợm), đảo đá có hải đăng hỏng, đảo bướm. Truyện cụ thể để người làm tự viết theo tinh thần trên.

### Giai đoạn D: Phần thêm

- Mini-game **bắt bướm** (chạm bướm bay quanh ao hoa) cho năng lượng/quà.
- **Vòng quay may mắn** mỗi ngày một lượt miễn phí.
- Sắp lại giao diện theo bố cục Taonga: cấp ở trên trái, năng lượng ở giữa trên, xu và kim cương ở trên phải, cột nhiệm vụ bên trái, nút Thuyền to ở đáy.
- Thêm xưởng bậc 3 (lò gốm: đĩa, bình, đèn đất) khi có hình.

## 8. Hình cần vẽ (theo giai đoạn)

- **A:** biểu tượng gỗ, đá, tre, lá cọ, đất sét, dây leo, ván, giá gỗ, củi, giỏ, chiếu, dây thừng, đuốc; vật cản mới (bụi tre, gò đất sét, cây rừng to, tảng đá to); xưởng mộc, nhà đan lát, nhà người đốn gỗ; giàn giáo công trường; nhà đổ nát, bếp đổ nát, thuyền chìm; cầu tre (hư và đã sửa); sao biển, vỏ sò, cua trên cát; rương; đám mây che vùng.
- **B:** chân dung lớn (nửa người) cho từng nhân vật nói chuyện; 1–2 người dân đảo mới.
- **C:** hải đồ; hình nền và vật cản riêng cho 3 đảo; người dân và thú dẫn đường của từng đảo; công trình đổ nát của từng đảo; phần thưởng lâu dài.
- **D:** ao hoa và bướm; vòng quay; lò gốm và sản phẩm.

## 9. Quyết định của mình (người dùng cần xem lại)

1. **Giữ tiến độ đang chơi** (mục A9), không bắt chơi lại từ đầu. Người chơi cũ muốn trải nghiệm đảo hoang thì dùng nút "Chơi lại từ đầu" đã có trong Cài đặt.
2. Bỏ cân nặng khoang thuyền và lương thực khi đi đảo.
3. Dùng **giữ ngón tay để chặt liên tục** thay cho nút x1/x3/x5.
4. Thời gian sản xuất giữ thang ngắn như game hiện tại (giây đến vài phút), không dùng giờ như Taonga.
5. Chỉ Maisie đi bộ tới vật cản; các thao tác khác giữ như cũ.
6. Bối cảnh truyện: đảo của ông bà bị bão làm hư hại.
7. Đảo rộng ra khoảng 40×40: vùng 26×26 cũ là vùng lõi, rừng mới bao quanh dưới mây.
8. Vật liệu không tính vào sức chứa Kho và không giới hạn.
9. Giữ 5 đảo Phiêu lưu cũ, thêm 3 đảo có truyện mới trên cùng một hải đồ.

## 10. Phần để người làm tự quyết

- Cách tổ chức code và dữ liệu, số lượng file mới; giữ phong cách code hiện có (tiếng Việt trong chú thích, dữ liệu khai báo trong `src/data.js`).
- Số nhát, tỉ lệ rơi, giá, thời gian cụ thể (miễn hợp lý và không làm bé kẹt).
- Bố cục chi tiết của các bảng góp vật liệu, hội thoại, hải đồ.
- Cách chia lane song song sao cho hai lane không sửa chung file.
- Nội dung truyện cụ thể và lời thoại, theo tinh thần mục 7B và 7C.

## 11. Cách kiểm chứng mỗi giai đoạn

- `npm run build` chạy được; console không có lỗi.
- Chơi thử trên preview ở khổ 375×812: ván mới đi hết phần hướng dẫn; một bản lưu cũ cấp cao vẫn mở được và giữ đủ công trình, kho, cấp.
- Không có chỗ nào bé bị kẹt: luôn còn ít nhất một cách kiếm năng lượng hoặc một việc làm được.
- Chơi được khi tắt mạng sau lần mở đầu.
