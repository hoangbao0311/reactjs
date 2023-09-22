import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/context";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const User = () => {
  const { listUser, idLogin } = useContext(Context);
  const navigate = useNavigate();

  const id = idLogin;

  const obj = listUser.find((item) => item.id == id);
  console.log("obj", obj);
  const [userName, setUserName] = useState(obj ? obj.email : "");
  const [password, setPassword] = useState(obj ? obj.email : "");

  console.log("user", userName);
  console.log("pass", password);
  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ

      const response = await axios.put(`http://localhost:3004/user/${id}`, {
        email: userName,
        password: password,
      });
      toast.success("Cập nhật thành công !");
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
    }
  };

  const handleClick = () => {
    localStorage.setItem("isLogin", userName);
    updateData();
    window.location.reload("/");
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2">
        <p>UserName</p>
        <input
          type="text"
          name=""
          onChange={(e) => setUserName(e.target.value)}
          defaultValue={obj ? obj.email : ""}
          className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
        />
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          defaultValue={obj ? obj.password : ""}
          className="border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
        />
        <button
          className="border-[1px] border-[#0C713D] py-1 px-3 hover:bg-[#0C713D] hover:text-white rounded-md "
          onClick={handleClick}
          type=""
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default User;
