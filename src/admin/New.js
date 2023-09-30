import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { toast } from "react-toastify";

function New() {
  const navigate = useNavigate();
  const { setReload } = useContext(Context);
  const isLogin = localStorage.getItem("isLogin");
  const [baseImage, setBaseImage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [value, setValue] = useState("on");
  const setNewUser = async (e) => {
    const response = await axios.post("http://localhost:3004/uploads", {
      image: baseImage,
      title: title,
      content: content,
      user: isLogin,
      price: price,
      type: type,
      value: value,
    });
    if (response.status === 201) {
      setReload(true);
      toast.success("Đăng bài thành công !");
      navigate("/admin/post");
    }
  };

  // Giới hạn kích thước tải lên

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    if (file.size > 2 * 1024 * 1024) {
      toast.warning("File size exceeds the limit (2MB) !");
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
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border-b-2 text-3xl font-bold w-full"
            type="text"
            placeholder="Tên sản phẩm"
          />
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="outline-none border-b-2 text-base w-full"
            type="text"
            placeholder="Giới thiệu sản phẩm "
          />
          <select
            onChange={(e) => setType(e.target.value)}
            value={type}
            className="rounded-[4px] border h-[40px] w-1/4 pl-[10px]"
            name="type"
          >
            <option value={"1"}>Chọn Loại Đồ Uống</option>
            <option value={"Đá Xay"}>Đá Xay</option>
            <option value={"Cà Phê"}>Cà Phê</option>
            <option value={"Trà Sữa"}>Trà Sữa</option>
            <option value={"TRÀ"}>TRÀ</option>
            <option value={"Cà Phê Gói"}>Cà Phê Gói</option>
            <option value={"Snack"}>SNACK</option>
            <option value={"Bakery"}>BAKERY</option>
          </select>
          <div className="flex w-full">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="outline-none border-b-2 text-base w-full "
              type="number"
              placeholder="Giá sản phẩm"
            />
            <div className="text-base">Đ</div>
          </div>
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
