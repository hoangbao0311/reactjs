import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditPostUser = () => {
  const { list, listUser } = useContext(Context);
  const { id } = useParams();
  const obj = list.find((item) => item.id == id);

  const [imageChanged, setImageChanged] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  console.log("title :", title);
  console.log("content :", content);

  // Xu ly data

  useEffect(() => {
    const fetchData = async () => {
      // Sử dụng promises để đọc giá trị title và content từ obj
      const titlePromise = new Promise((resolve) => {
        resolve(obj ? obj.title : "");
      });

      const contentPromise = new Promise((resolve) => {
        resolve(obj ? obj.content : "");
      });

      // Chờ tất cả promises hoàn thành
      const [titleValue, contentValue] = await Promise.all([
        titlePromise,
        contentPromise,
      ]);

      // Cập nhật state title và content sau khi promises đã hoàn thành
      setTitle(titleValue);
      setContent(contentValue);
    };

    fetchData();
  }, [obj]);

  // Update Data

  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ
      if (imageChanged) {
        const response = await axios.patch(
          `http://localhost:3004/uploads/${id}`,
          {
            title: title,
            content: content,
            image: baseImage,
          }
        );
        toast.success("Cập nhật thành công !");
        navigate("/user");
      } else {
        const response = await axios.patch(
          `http://localhost:3004/uploads/${id}`,
          {
            title: title,
            content: content,
          }
        );
        toast.success("Cập nhật thành công !");
        navigate("/user");
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
    }
  };

  const handleClick = () => {
    updateData();
  };

  // Base 64

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    if (file.size > 2 * 1024 * 1024) {
      toast.warning("File size exceeds the limit (2MB) !");
    } else {
      setBaseImage(base64);
      setImageChanged(true);
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
    <div className="flex flex-col w-1/2">
      <div>Edit</div>
      {/* <p>ID</p>
      <input type="text" name="" value={id} disabled />
      <input type="text" name="" defaultValue={obj ? obj.user : ""} disabled /> */}
      <p className="font-bold">Title: </p>
      <input
        className="py-3 outline-none border-[1px] border-black"
        type="text"
        name=""
        onChange={(e) => setTitle(e.target.value)}
        defaultValue={obj ? obj.title : ""}
      />
      <p className="font-bold">Content: </p>
      <input
        className="py-3 outline-none border-[1px] border-black"
        onChange={(e) => setContent(e.target.value)}
        type="text"
        name=""
        defaultValue={obj ? obj.content : ""}
      />

      <p className="font-bold">Image: </p>
      <div className="flex gap-4">
        {obj ? (
          <img className="flex-1" src={obj.image} alt="" />
        ) : (
          <p>No Image</p>
        )}
        <div className="bg-[#E9E9E9] w-1/5 items-center justify-center rounded-lg flex flex-col flex-1">
          Chọn Ảnh Mới
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
      <button
        className=" h-10 justify-center  py-2 font-medium text-lg flex items-center bg-green-700 text-white px-6 rounded-3xl m-2 cursor-pointer hover:bg-red-800"
        onClick={handleClick}
        type=""
      >
        Submit
      </button>
    </div>
  );
};

export default EditPostUser;
