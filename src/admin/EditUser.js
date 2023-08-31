import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { listUser } = useContext(Context);

  const obj = listUser.find((item) => item.id == id);

  const [userName, setUserName] = useState(obj.email);
  const [password, setPassword] = useState(obj.password);

  console.log("user", userName);
  console.log("pass", password);
  const updateData = async () => {
    try {
      // Khi đã chọn ảnh mới thì lấy ảnh mới up lên nếu không thì vẫn giữ ảnh cũ và dữ liệu cũ

      const response = await axios.put(`http://localhost:3004/user/${id}`, {
        email: userName,
        password: password,
      });
      alert("cap nhat thanh cong");
      navigate("/admin/user/");
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
    }
  };

  const handleClick = () => {
    updateData();
  };

  return (
    <div className="flex flex-col">
      <div>EditUser</div>
      <div>Edit</div>
      <p>ID</p>
      <input type="text" name="" value={id} disabled />
      <p>UserName</p>
      <input
        type="text"
        name=""
        onChange={(e) => setUserName(e.target.value)}
        defaultValue={obj ? obj.email : ""}
      />
      <p>Password</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        name=""
        defaultValue={obj ? obj.password : ""}
      />
      <button onClick={handleClick} type="">
        Lưu
      </button>
    </div>
  );
};

export default EditUser;
