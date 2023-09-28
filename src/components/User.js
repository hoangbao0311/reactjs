import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/context";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const User = () => {
  const { listUser, idLogin } = useContext(Context);
  const navigate = useNavigate();

  const nameLogin = localStorage.getItem("isLogin");

  const [password, setPassword] = useState("");
  const [comfirm, setConfirm] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 1) {
      toast.warning("Không được để trống password");
      return;
    } else if (password !== comfirm) {
      toast.warning("Mật khẩu và xác nhận mật khẩu phải giống nhau");
      return;
    } else {
      try {
        await axios.patch(`http://localhost:3004/user/${idLogin}`, {
          password: password,
        });
        navigate("/");
        toast.success("Cập nhật tài khoảng thành công");
      } catch (error) {
        toast.warning("Có lỗi!");
        console.error("Lỗi khi cập nhật dữ liệu:", error);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <p>UserName</p>
          <input
            type="text"
            name=""
            disabled
            defaultValue={nameLogin}
            className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          />
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          />
          <p>Confirm Password</p>
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            name=""
            className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          />
          <button
            className="border-[1px] border-[#0C713D] py-1 px-3 hover:bg-[#0C713D] hover:text-white rounded-md "
            onClick={onSubmit}
            type="submit"
          >
            Lưu
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
