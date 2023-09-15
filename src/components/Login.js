import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const email = "";
  const password = "";
  const [useEmail, setEmail] = useState("");
  const [usePassword, setPassword] = useState("");
  const isLogin = "1";

  const submitHanlde = () => {
    let isLoggedIn = false;

    axios
      .get("http://localhost:3004/user")
      .then((response) => {
        // Xử lý dữ liệu khi yêu cầu thành công
        const data = response.data;

        // Lặp qua từng đối tượng trong mảng data và lấy email và password
        data.forEach((user) => {
          const email = user.email;
          const password = user.password;

          if (email === useEmail && password === usePassword) {
            isLoggedIn = true;
            localStorage.setItem("isLogin", email);
            // localStorage.setItem("bookmark", JSON.stringify([0]));
          }
        });

        if (isLoggedIn) {
          toast.success("Đăng nhập thành công");
          //   Chuyển trang khi login thành công
          setTimeout(function () {
            window.location.href = "/";
          }, 1000);
        } else {
          toast.error("Đăng nhập không thành công - Sai email hoặc mật khẩu");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu GET:", error);
      });
  };

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
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="text"
            placeholder="Email"
          />
        </div>
        <div>
          <div>Mật khẩu</div>
          <input
            value={usePassword}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div>Quên mật khẩu ?</div>
        <div>
          <button
            className="w-60 h-10 bg-[#E60023] text-white rounded-3xl font-bold"
            type="submit"
            onClick={submitHanlde}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
