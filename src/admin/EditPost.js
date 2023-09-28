import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditPost = () => {
  const loginAdmin = localStorage.getItem("admin");
  if (loginAdmin == null) {
    window.location.href = "/admin/loginadmin";
  }
  const { list } = useContext(Context);

  const { id } = useParams();
  const obj = list.find((item) => item.id == id);

  const [imageChanged, setImageChanged] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setTitle(obj ? obj.title : "");
    setContent(obj ? obj.content : "");
    setPrice(obj ? obj.price : "");
  }, [obj]);

  // Update Data

  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ
      if (imageChanged) {
        await axios.patch(`http://localhost:3004/uploads/${id}`, {
          title: title,
          content: content,
          price: price,
          type: type,
          image: baseImage,
        });
        toast.success("Cập nhật thành công !");
        navigate("/admin/post/");
      } else {
        await axios.patch(`http://localhost:3004/uploads/${id}`, {
          title: title,
          content: content,
          price: price,
          type: type,
          image: obj.image,
        });
        toast.success("Cập nhật thành công !");
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
    <div className="flex flex-col w-1/2 gap-3">
      <div className="text-2xl font-bold text-green-800">Edit</div>
      <div className="flex gap-2">
        <p className="w-20 font-bold">ID: </p>
        <input type="text" name="" value={id} disabled />
      </div>
      <div className="flex gap-2 items-center w-full">
        <p className="w-20 font-bold">Title: </p>
        <input
          className="w-full border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          type="text"
          name=""
          onChange={(e) => setTitle(e.target.value)}
          defaultValue={obj ? obj.title : ""}
        />
      </div>
      <div className="flex gap-2 items-center w-full">
        <p className="w-20 font-bold">Content: </p>
        <input
          className="w-full border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          onChange={(e) => setContent(e.target.value)}
          type="text"
          name=""
          defaultValue={obj ? obj.content : ""}
        />
      </div>
      <div className="flex gap-2 items-center">
        <p className="w-20 font-bold">Price: </p>
        <input
          className="w-full border-[1px] border-[#0C713D] outline-none py-1 px-3 rounded-md"
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          name=""
          defaultValue={obj ? obj.price : ""}
        />
      </div>
      <select
        onChange={(e) => setType(e.target.value)}
        value={type}
        className="rounded-[4px] border h-[40px] w-1/4 pl-[10px]"
        name="type"
      >
        <option value={"1"}>Chọn Loại Đồ Uống</option>
        <option value={"Cà Phê"}>Cà Phê</option>
        <option value={"Trà Sữa"}>Trà Sữa</option>
        <option value={"TRÀ"}>TRÀ</option>
        <option value={"Cà Phê Gói"}>Cà Phê Gói</option>
        <option value={"Snack"}>SNACK</option>
        <option value={"Bakery"}>BAKERY</option>
      </select>
      <p className="w-20 font-bold">Image</p>
      {obj ? (
        <img className="flex-1 w-44" src={obj.image} alt="" />
      ) : (
        <p>No Image</p>
      )}
      <div className="bg-[#E9E9E9] w-1/2 items-center justify-center rounded-lg flex flex-col">
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
      <button
        className="border-[1px] border-[#0C713D] py-1 px-3 hover:bg-[#0C713D] hover:text-white rounded-md "
        onClick={handleClick}
        type=""
      >
        Submit
      </button>
    </div>
  );
};

export default EditPost;
