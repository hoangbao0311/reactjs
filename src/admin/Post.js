import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/context";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const Post = () => {
  const loginAdmin = localStorage.getItem("admin");

  const navigate = useNavigate();

  const { list, getData } = useContext(Context);
  const [search, setSearch] = useState("");
  const [productStates, setProductStates] = useState("");

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  const handleOnOff = async (id, value) => {
    await axios.patch(`http://localhost:3004/uploads/${id}`, {
      value: value,
    });
    toast.success("Cập nhật thành công !");
    navigate("/admin/post/");
  };

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
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <div className="h-12 max-w-[200px] border-[1px] border-green-600 text-white bg-green-600 mr-5 p-2 text-base px-4 font-bold font-[inherit]">
          <Link to="/admin/new">Thêm sản phẩm mới</Link>
        </div>
        <input
          className="w-full h-10 text-[20px] outline-none pl-3"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm theo title"
        />

        <div className="flex border-[1px] border-stone-300">
          <div>
            <div className="flex">
              <p className="w-[50px] py-2 flex items-center border-stone-300 px-4 font-bold text-[18px]">
                ID
              </p>
              <p className="w-[354px] py-2 flex items-center border-stone-300 px-4 font-bold text-[18px]">
                Image
              </p>
              <p className="w-[217px] py-2  items-center border-stone-300 px-4 font-bold text-[18px]">
                Type
              </p>
              <p className="w-[217px] py-2  items-center border-stone-300 px-4 font-bold text-[18px]">
                Title
              </p>
              <p className="w-[217px] py-2 flex items-center border-stone-300 px-4 font-bold text-[18px]">
                Price
              </p>
              <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
              <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
            </div>
            {list
              .filter((item) => {
                return (
                  search.toLowerCase() === "" ||
                  item.title.toLowerCase().includes(search)
                );
              })
              .map((item) => {
                return (
                  <div
                    className="flex mb-5 border-b-[1px] border-y-zinc-400 "
                    key={item.id}
                  >
                    <p className="w-[50px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 ">
                      {item.id}
                    </p>
                    <p className="w-[354px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                      <img className="w-24" src={item.image} />
                    </p>
                    <p className="w-[217px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                      {item.type}
                    </p>
                    <p className="w-[217px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                      {item.title}
                    </p>
                    <p className="w-[217px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                      {item.price}
                    </p>
                    <div className="flex items-center">
                      <form className="flex gap-2">
                        <input
                          type="radio"
                          name="onoff"
                          value="on"
                          defaultChecked={item.value == "on"}
                          onClick={(e) => handleOnOff(item.id, e.target.value)}
                        />
                        Còn hàng
                        <input
                          type="radio"
                          name="onoff"
                          value="off"
                          defaultChecked={item.value == "off"}
                          onClick={(e) => handleOnOff(item.id, e.target.value)}
                        />
                        Hết hàng
                      </form>
                      <p
                        onClick={() => handleEdit(item.id)}
                        className=" w-16 h-10 py-2 flex items-center pr-4 bg-cyan-400 text-white px-4 rounded-md m-2 cursor-pointer hover:bg-cyan-500"
                      >
                        Edit
                      </p>
                      <p
                        onClick={() => handleDelete(item.id)}
                        className="w-20 h-10 py-2 flex items-center pr-4 bg-red-700 text-white px-4 rounded-md m-2 cursor-pointer hover:bg-red-800"
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
