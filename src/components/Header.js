import React from "react";
import Logo from "../image/Pinterest Logo _ Real Company _ Alphabet, Letter P Logo.png";
import Search from "./Search";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage, AiFillCaretDown } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="w-[100vw] ">
      <div className="flex px-4 py-1 items-center w-[100vw] h-[80px] ">
        <div className="flex items-center ">
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
        <div className="flex-auto">
          <Search />
        </div>
        <div className="flex items-center justify-end gap-3 mx-2">
          <div>
            <BsFillBellFill size={24} />
          </div>
          <div>
            <AiFillMessage size={24} />
          </div>
          <div>
            <BiUserCircle size={24} />
          </div>
          <div>
            <AiFillCaretDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
