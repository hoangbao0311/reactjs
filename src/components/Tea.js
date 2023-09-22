import React from "react";
import slide from "../image/Slide/z4625076372031_3b19bd81133a1823a15ec7b67088fa15-20230824041843.jpg";
import pic1 from "../image/Tea/trà phúc long 1.jpg";
import pic2 from "../image/Tea/trà phúc long 2.jpg";
import pic3 from "../image/Tea/trà-phúc-long-6'.jpg";
import icon from "../image/icon_tealeaves.png";

const Tea = () => {
  return (
    <div className="mb-10">
      <img src={slide} alt="" />
      <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-10">
        <h1>LÁ TRÀ PHÚC LONG</h1>
      </div>
      <div className="flex justify-center">
        <img src={icon} alt="" />
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4 mx-32  justify-center ">
        <div className="flex justify-center items-center">
          <p class="text-gray-700 ">
            Một cây trà nếu được trồng ở những vùng đất có độ cao và khí hậu
            khác nhau thì sẽ thu được những loại trà cũng khác nhau. Có thể thấy
            sự phức tạp đến từ phía bên trong, từ những thành phần cũng như cấu
            tạo hoá học độc nhất vô nhị mà chỉ mình cây trà có được. Thấu hiểu
            điều đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt nhất,
            một búp và hai lá non thường được chúng tôi thu hái vào thời điểm
            sáng sớm. Tiếp đến, quy trình sản xuất để cho ra các sản phẩm trà
            chất lượng cũng được thực hiện khép kín.
          </p>
        </div>
        <div>
          <img class="w-full h-80" src={pic1} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4 mx-32  justify-center">
        <div>
          <img class="w-full h-80" src={pic2} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <p class="text-gray-700">
            Trong quá trình tìm kiếm từng loại trà thượng hạng, Phúc Long luôn
            giữ gìn những hợp chất đặc biệt từ lá trà để làm nên tách trà đậm
            vị. <br />
            - Theanine (vị ngon) là cảm nhận được trạng thái tỉnh táo, tràn đầy
            năng lượng khi thưởng thức trà. <br />
            - Carbohydrate (vị ngọt) là đường tích trữ trong lá trà. <br />
            - Polyphenols (vị chát) là thành phần đặc biệt có nhiều trong lá trà
            non. <br />
            - Caffein (vị đắng) là thành phần bị ảnh hưởng bởi 2 yếu tố: nhiệt
            độ nước và cách ngâm. Để tiết chế caffein, khi pha nên dùng nước
            nhiệt độ vừa phải và giảm thời gian ngâm trà. <br />- Enzyme (men)
            là chất xúc tác sinh học thúc đẩy quá trình lên men của lá trà
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4 mx-32  justify-center">
        <div className="flex justify-center items-center">
          <p class="text-gray-700 ">
            Một cây trà nếu được trồng ở những vùng đất có độ cao và khí hậu
            khác nhau thì sẽ thu được những loại trà cũng khác nhau. Có thể thấy
            sự phức tạp đến từ phía bên trong, từ những thành phần cũng như cấu
            tạo hoá học độc nhất vô nhị mà chỉ mình cây trà có được. Thấu hiểu
            điều đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt nhất,
            một búp và hai lá non thường được chúng tôi thu hái vào thời điểm
            sáng sớm. Tiếp đến, quy trình sản xuất để cho ra các sản phẩm trà
            chất lượng cũng được thực hiện khép kín.
          </p>
        </div>
        <div>
          <img class="w-full h-80" src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tea;
