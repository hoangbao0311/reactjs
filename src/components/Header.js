import React from "react";
import Logo from "../image/Pinterest Logo _ Real Company _ Alphabet, Letter P Logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex px-4 py-1">
        <div>
          <img className="h-12 w-12" src={Logo} />
        </div>
        <div>
          <button
            className="h-12 min-w-[60px] px-4 font-bold bg-black text-white rounded-3xl"
            type=""
          >
            Trang Chủ
          </button>
        </div>
        <div>
          <button
            className="h-12 min-w-[60px] px-4 font-bold rounded-3xl"
            type=""
          >
            Tạo +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
