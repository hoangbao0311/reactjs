import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const { list } = useContext(Context);

  const { id } = useParams();
  const obj = list.find((item) => item.id == id);

  const [imageChanged, setImageChanged] = useState(false);
  const [title, setTitle] = useState(obj.title);
  const [content, setContent] = useState(obj.content);

  console.log(title);

  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // Update Data

  console.log("title", title);
  console.log("content", content);

  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ
      if (imageChanged) {
        const response = await axios.put(
          `http://localhost:3004/uploads/${id}`,
          {
            title: title,
            content: content,
            image: baseImage,
          }
        );
        alert("cap nhat thanh cong");
        navigate("/admin/post/");
      } else {
        const response = await axios.put(
          `http://localhost:3004/uploads/${id}`,
          {
            title: title,
            content: content,
            image: obj.image,
          }
        );
        alert("Cập nhật thành công");
        navigate("/admin/post/");
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
      alert("File size exceeds the limit (2MB)");
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
    <div className="flex flex-col ">
      <div>Edit</div>
      <p>ID</p>
      <input type="text" name="" value={id} disabled />
      <p>Title</p>
      <input
        type="text"
        name=""
        onChange={handleTitleChange}
        defaultValue={obj ? obj.title : ""}
      />
      <p>content</p>
      <input
        onChange={handleContentChange}
        type="text"
        name=""
        defaultValue={obj ? obj.content : ""}
      />
      <p>Image</p>
      {obj ? (
        <img className="flex-1 w-44" src={obj.image} alt="" />
      ) : (
        <p>No Image</p>
      )}
      <div className="bg-[#E9E9E9]  items-center justify-center rounded-lg flex flex-col">
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
      <button onClick={handleClick} type="">
        Submit
      </button>
    </div>
  );
};

export default EditPost;
