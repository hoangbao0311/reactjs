import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const apiUrl = "http://localhost:3004/users"; // Địa chỉ API của json-server

  const email = "";
  const password = "";

  const [useEmail, setEmail] = useState("");
  const [usePassword, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const data = {
    email: email,
    password: password,
  };

  axios
    .post(apiUrl, data)
    .then((response) => {
      console.log("Tài khoản người dùng đã được thêm:", response.data);
    })
    .catch((error) => {
      console.error("Lỗi khi thêm tài khoản người dùng:", error);
    });

  return (
    <div className="flex justify-center bg-[#E9E9E9] h-screen">
      <div className=" bg-white  rounded-3xl w-[484px] flex flex-col items-center justify-center h-fit py-7 pb-9 mt-7 gap-4">
        <div>
          <img
            className="w-20 h-20"
            src="/image/Pinterest Logo _ Real Company _ Alphabet, Letter P Logo.png"
          />
        </div>
        <div>
          <h1 className="text-[32px] px-4 text-center font-semibold">
            Chào mừng bạn đến với Pinterest
          </h1>
        </div>
        <div>
          <div>Email</div>
          <input
            value={useEmail}
            // onChange={handleEmailChange}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <div>Mật khẩu</div>
          <input
            value={usePassword}
            // onChange={handlePasswordChange}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>{" "}
        <div>
          <div>Nhập lại mật khẩu</div>
          <input
            // value={usePassword}
            // onChange={handlePasswordChange}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="password"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <div>
          <button
            className="w-60 h-10 bg-[#E60023] text-white rounded-3xl font-bold"
            type="submit"
            // onClick={submitHanlde}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
