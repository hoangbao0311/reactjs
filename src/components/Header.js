import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../image/Pinterest Logo _ Real Company _ Alphabet, Letter P Logo.png";
import Search from "./Search";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const isLogin = localStorage.getItem("isLogin");

let isLoginStyle = "hidden";
let isBlockStyle = "block";

if (isLogin !== null) {
  isLoginStyle = "block";
  isBlockStyle = "hidden";
} else {
  isLoginStyle = "hidden";
  isBlockStyle = "block";
}

const logOut = () => {
  localStorage.removeItem("isLogin");
  window.location.href = "/";
};

const Header = () => {
  return (
    <div className="w-[100vw]">
      <div className="flex px-4 py-1 items-center w-[100vw] h-[80px] fixed z-10 top-0 bg-white ">
        <div className="flex items-center ">
          <div>
            <img className="h-12 w-12 " src={Logo} />
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] px-4 font-bold bg-black text-white rounded-3xl py-3 flex items-center justify-center"
              to="/"
            >
              Trang Chủ{" "}
            </Link>
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] px-4 font-bold rounded-3xl"
              to="/new"
            >
              Tạo +
            </Link>
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
          <Link className={isBlockStyle} to="/login">
            Dang Nhap
          </Link>
          <Link className={isBlockStyle} to="/register">
            Dang ky
          </Link>
          <div>
            <button onClick={logOut} className={isLoginStyle} type="">
              Dang xuat
            </button>
          </div>
          <div className={isLoginStyle}>Xin chào: {isLogin}</div>
        </div>
      </div>
      <div className="mt-20 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
