import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const User = () => {
  const isLogin = localStorage.getItem("isLogin");
  const { list, getData, setReload, reload } = useContext(Context);
  console.log(list);
  const navigate = useNavigate();

  useEffect(() => {
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  const obj = list.filter((item) => item.user == isLogin);

  console.log(obj);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3004/uploads/${id}`
      );
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    toast.error("Đã xóa bài viết");
  };

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex-1 flex flex-col">
        <div className="my-6 font-bold text-[24px]">Bài đăng của bạn:</div>
        <div className="flex flex-col items-center gap-10 w-full">
          {obj.map((item) => {
            return (
              <div key={item.id} className="w-1/2 h-fit">
                <p className="font-bold text-xl">Title: </p>
                <p>{item.title}</p>
                <p className="font-bold text-xl">Content:</p>
                <p>{item.content}</p>
                <img className="h-52" src={item.image} alt="" />
                <p
                  className="  h-10 py-2 flex items-center bg-cyan-400 text-white justify-center rounded-md m-2 cursor-pointer hover:bg-cyan-500"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </p>
                <p
                  className=" h-10 py-2 flex items-center bg-red-700 text-white justify-center rounded-md m-2 cursor-pointer hover:bg-red-800"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
