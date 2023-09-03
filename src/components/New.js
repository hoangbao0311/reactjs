import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  console.log(isLogin);

  const setNewUser = async (e) => {
    const response = await axios.post("http://localhost:3004/uploads", {
      image: baseImage,
      title: title,
      content: content,
      user: isLogin,
    });
    if (response.status === 201) {
      alert("Successfully");
      navigate("/new");
      // quay ve man hinh chinh
    }
  };

  const [baseImage, setBaseImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  // Giới hạn kích thước tải lên

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    if (file.size > 2 * 1024 * 1024) {
      alert("File size exceeds the limit (2MB)");
    } else {
      setBaseImage(base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="bg-[#E9E9E9] flex justify-center p-7 rounded-3xl">
      <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around gap-2 ">
        <div className="flex flex-col w-[310px] gap-2 ">
          <div className="bg-[#E9E9E9] w-[270px] h-[495px] items-center justify-center rounded-lg flex flex-col">
            <div className="relative top-[50%] ">
              Kéo và thả hoặc nhấp vào để tải lên
            </div>
            {baseImage && (
              <div className="relative">
                <img src={baseImage} className="h-full "></img>
              </div>
            )}
            <input
              className="bg-slate-500 opacity-0 w-full h-full"
              type="file"
              accept="image/*"
              onChange={uploadImage}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <input
            value={title}
            onChange={handleTitle}
            className="outline-none border-b-2 text-3xl font-bold w-full"
            type="text"
            placeholder="Tạo tiêu đề"
          />
          <input
            value={content}
            onChange={handleContent}
            className="outline-none border-b-2 text-base w-full"
            type="text"
            placeholder="Cho mọi người biết bạn đang giới thiệu điều gì "
          />
          <button
            className="w-40 py-2 bg-black text-white font-bold text-[16px] rounded-2xl"
            onClick={setNewUser}
          >
            Tải lên
          </button>
        </div>
      </div>
    </div>
  );
}

export default New;
