import React from "react";
import slide from "../image/Tea/slcf.jpg";
import pic1 from "../image/Tea/cafe1.jpg";
import pic2 from "../image/Tea/cafe2.jpg";
import pic3 from "../image/Tea/cafe3.jpg";
import icon from "../image/icon_tealeaves.png";

const Cafe = () => {
  return (
    <div className="mb-10">
      <img src={slide} alt="" />
      <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-10">
        <h1>HẠT CÀ PHÊ PHÚC LONG</h1>
      </div>
      <div className="flex justify-center">
        <img src={icon} alt="" />
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4 mx-32  justify-center ">
        <div className="flex justify-center items-center">
          <p class="text-gray-700 ">
            Cà phê càng được rang sẫm màu hương vị càng trọn vẹn. Rang cà phê là
            một quá trình đòi hỏi sự tinh tế từ đôi bàn tay và sự am hiểu từng
            loại hạt cà phê của người nghệ nhân. Rang lửa nhỏ khiến cà phê chưa
            chín tới và đắng hơn, trong khi rang quá kỹ lại khiến cà phê cháy
            khét đánh mất những đặc tính thượng hạng vốn có. Trong quá trình
            rang đủ thời gian, những dinh dưỡng như proteins, enzymes mới sẽ
            tích tụ phía trong tạo nên phần chất của cà phê, làm cho cà phê đậm
            hơn, sánh hơn.
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
            Trên hành trình tìm kiếm những hạt cà phê ngon nhất, Phúc Long luôn
            chú trọng bốn đặc tính từ trái cà phê nhằm tôn trọng nguyên bản cho
            tách cà phê đậm vị. <br />
            - Hương thơm là mùi hương của hạt cà phê <br />
            - thơm bao nhiêu hứa hẹn cho nhiều vị bấy nhiêu. <br />
            - Thể chất là khái niệm để chỉ độ đậm đà trong nước chiết xuất cà
            phê. cảm nhận thông qua đánh giá của người thưởng thức.
            <br />
            - Acid là hợp chất tạo nên vị chua thanh của cà phê. <br />
            - Hậu vị là cảm nhận vị cà phê còn đọng lại sau khi thưởng thức.
            <br />
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-4 mx-32  justify-center">
        <div className="flex justify-center items-center">
          <p class="text-gray-700 ">
            Tách cà phê hoàn hảo được định nghĩa là tách cà phê có vị đắng đậm
            đà, chua thanh thoát, lan toả hương thơm nồng nàn, dễ dàng chinh
            phục vị giác của bất cứ ai. Tách cà phê đậm vị luôn luôn là thức
            uống giữ vị trí nhất định trong lòng những tín đồ cà phê Việt, dù
            văn hoá thưởng thức có nhiều thay đổi theo sự phát triển từng ngày
            của xã hội.
          </p>
        </div>
        <div>
          <img class="w-full h-80" src={pic3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cafe;
