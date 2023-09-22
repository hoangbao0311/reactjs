import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../image/logo_2.png";
import Search from "./Search";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "./Footer";

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
  localStorage.removeItem("bookmark");
  localStorage.removeItem("cartItems");
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
              className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
              to="/"
            >
              TRANG CHỦ
            </Link>
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
              to="/cafe"
            >
              CÀ PHÊ
            </Link>
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
              to="/tea"
            >
              TRÀ
            </Link>
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
              to="/"
            >
              THỨC UỐNG
            </Link>
          </div>
          <div>
            <Link
              className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
              to="/"
            >
              SẢN PHẨM
            </Link>
          </div>
        </div>
        <div className="flex-auto">
          <Search />
        </div>
        <div className="flex items-center justify-end gap-3 mx-2">
          <div>
            <Link className={isLoginStyle} to="bookmark">
              <AiOutlineShoppingCart size={24} color="green" />
            </Link>
          </div>
          <div>
            <Link className={isLoginStyle} to="user">
              <BiUserCircle size={24} color="green" />
            </Link>
          </div>
          <Link className={isBlockStyle} to="/login">
            Đăng Nhập
          </Link>
          <Link className={isBlockStyle} to="/register">
            Đăng Ký
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
      <Footer />
    </div>
  );
};

export default Header;
