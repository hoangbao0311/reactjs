import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../image/logo_2.png";
import Search from "./Search";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Footer from "./Footer";

const isLogin = localStorage.getItem("isLogin");

let isLoginStyle = "hidden ";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="bg-white text-black p-4 w-full ">
        <div className="flex items-center justify-between w-full">
          <div className="flex justify-center items-center">
            {/* <img className="h-12 w-12 " src={Logo} /> */}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none focus:text-white flex w-full justify-between"
          >
            <img className="h-12 w-12 " src={Logo} />

            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } mt-4 lg:mt-0 w-full lg:justify-around`}
        >
          <ul className="lg:flex space-x-4 items-center lg:justify-between">
            <li className="hidden lg:block ">
              <div className="flex gap-3">
                <Link to="/">
                  <img className="h-12 w-12 " src={Logo} />
                </Link>
                <Search />
              </div>
            </li>

            <li>
              <Link
                className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
                to="/"
              >
                THỨC UỐNG
              </Link>
            </li>
            <li>
              <Link
                className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
                to="/cafe"
              >
                CÀ PHÊ
              </Link>
            </li>
            <li>
              <Link
                className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
                to="/tea"
              >
                TRÀ
              </Link>
            </li>

            <li>
              <Link
                className="h-12 min-w-[60px] text-base px-4 font-bold flex items-center justify-center font-[inherit]"
                to="/"
              >
                SẢN PHẨM
              </Link>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-center gap-2 ">
            <li>
              <Link to="bookmark">
                <AiOutlineShoppingCart size={24} color="green" />
              </Link>
            </li>
            <li>
              <Link className={isLoginStyle} to="user">
                <BiUserCircle size={24} color="green" />
              </Link>
            </li>
            <li>
              <Link className={isBlockStyle} to="/login">
                Đăng Nhập
              </Link>
            </li>
            <li>
              <Link className={isBlockStyle} to="/register">
                Đăng Ký
              </Link>
            </li>
            <li>
              <button onClick={logOut} className={isLoginStyle} type="">
                Dang xuat
              </button>
            </li>
            <li>
              <div className={isLoginStyle}>Xin chào: {isLogin}</div>
            </li>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Header;
