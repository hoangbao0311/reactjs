import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [useEmail, setEmail] = useState("");
  const [usePassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isLogin = "1";

  const handleSubmit = () => {
    if (usePassword !== confirmPassword) {
      toast.warning("Mật khẩu và xác nhận mật khẩu không khớp");

      return;
    }

    const data = {
      email: useEmail,
      password: usePassword,
    };

    let trueEmail = false;

    axios
      .get("http://localhost:3004/user")
      .then((response) => {
        // Lặp qua từng đối tượng trong mảng data và lấy email và password
        // Kiểm tra có trùng email có trong data chưa
        response.data.forEach((user) => {
          const email = user.email;
          if (useEmail === email) {
            trueEmail = false;
          } else {
            trueEmail = true;
          }
        });

        // Đăng ký thành công khi thông tin không trùng
        if (trueEmail) {
          axios
            .post("http://localhost:3004/user", data)
            .then((response) => {
              toast.success("Đăng ký thành công");
              localStorage.setItem("isLogin", data.email);
              window.location.href = "/";
            })
            .catch((error) => {
              console.error("Lỗi đăng ký:", error);
            });
        } else {
          toast.warning("Đăng ký không thành công, email đã tồn tại");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu GET ", error);
      });
  };

  return (
    <div className="flex justify-center bg-[#E9E9E9] h-screen">
      <div className=" bg-white rounded-3xl w-[484px] flex flex-col items-center justify-center h-fit py-7 pb-9 mt-7 gap-4">
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
        <div>
          <div>Nhập lại mật khẩu</div>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-4 w-72 py-2 min-h-[48px] rounded-2xl outline-none border-[1px] border-solid border-[#cdcdcd] shadow-sm"
            type="password"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
        <div>
          <button
            className="w-60 h-10 bg-[#E60023] text-white rounded-3xl font-bold"
            type="submit"
            onClick={handleSubmit} // Gọi hàm xử lý khi nhấn nút Đăng ký
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
