import React from "react";

const New = () => {
  return (
    <div className="bg-[#E9E9E9] flex justify-center p-7 ">
      <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around gap-2 ">
        <div className="flex flex-col w-[310px] gap-2 ">
          <div className="bg-[#E9E9E9] w-[270px] h-[495px] flex items-center justify-center rounded-lg">
            Kéo thả hoặc nhấp vào để tải lên
            <input className="" type="file" id="image-input" accept="image/*" />
          </div>
          {/* <div className="bg-[#E9E9E9] flex items-center justify-center rounded-3xl w-[270px] py-4 text-[16px] ">
            Lưu từ trang
          </div> */}
        </div>
        <div className="flex flex-col gap-6">
          <input
            className="outline-none border-b-2 text-3xl font-bold"
            type="text"
            placeholder="Tạo tiêu đề"
          />
          <input
            className="outline-none border-b-2 text-base"
            type="text"
            placeholder="Cho mọi người biết bạn đang giới thiệu điều gì "
          />
        </div>
      </div>
    </div>
  );
};

export default New;
