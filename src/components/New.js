import React from "react";

const New = () => {
  return (
    <div className="bg-[#E9E9E9] flex justify-center p-7">
      <div className="bg-[#ffffff] rounded-2xl text-[12px] h-[880px] w-[690px] p-5 flex">
        <div className="flex flex-col w-[310px] ">
          <div className="bg-[#E9E9E9] w-[270px] h-[495px] flex items-center justify-center">
            Kéo thả hoặc nhấp vào để tải lên
          </div>
          <div>Lưu từ trang</div>
        </div>
        <div className=" ">
          <input
            className="outline-none border-b-2"
            type="text"
            placeholder="Tạo tiêu đề"
          />
        </div>
      </div>
    </div>
  );
};

export default New;
