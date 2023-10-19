import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditUser = () => {
  const loginAdmin = localStorage.getItem("admin");
  if (loginAdmin == null) {
    window.location.href = "/admin/loginadmin";
  }
  const navigate = useNavigate();

  const { id } = useParams();
  const { listUser } = useContext(Context);

  const obj = listUser.find((item) => item.id == id);

  const [userName, setUserName] = useState(obj ? obj.email : "");
  const [password, setPassword] = useState(obj ? obj.password : "");

  console.log("user", userName);
  console.log("pass", password);
  const updateData = async () => {
    try {
      await axios.put(`https://frt6fs-3004.csb.app/user/${id}`, {
        email: userName,
        password: password,
      });
      toast.success("Cập nhật thành công !");
      navigate("/admin/user/");
    } catch (error) {
      console.error("Lỗi khi cập nhật dữ liệu:", error);
    }
  };

  useEffect(() => {}, [listUser]);

  const handleClick = () => {
    updateData();
  };

  return (
    <div className="flex flex-col h-screen">
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
