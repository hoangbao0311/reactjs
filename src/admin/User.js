import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const loginAdmin = localStorage.getItem("admin");

  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const response = await axios.get("https://frt6fs-3004.csb.app/user");
    if (response.status === 200) {
      setList(response.data);
      console.log(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  // Xoa

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://frt6fs-3004.csb.app/user/${id}`
      );
      if (response.status === 200) {
        console.log("User deleted successfully");
        getData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [search, setSearch] = useState("");

  return (
    <div className="h-screen">
      <input
        className="w-full h-10 text-[20px] outline-none pl-3"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tìm kiếm theo username"
      />
      <div className="flex border-[1px] border-stone-300">
        <div>
          <div className="flex">
            <p className="w-[50px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
              ID
            </p>
            <p className="w-[354px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
              UserName
            </p>
            <p className="w-60 py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
              Password
            </p>
            <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
            <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
          </div>
          {list
            .filter((item) => {
              return (
                search.toLowerCase() === "" ||
                item.email.toLowerCase().includes(search)
              );
            })
            .map((item) => {
              return (
                <div className="flex mb-5  " key={item.id}>
                  <p className="w-[50px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 ">
                    {item.id}
                  </p>
                  <p className="w-[354px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                    {item.email}
                  </p>
                  <p className="flex-1 py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                    {item.password}
                  </p>
                  <p
                    onClick={() => handleEdit(item.id)}
                    className=" py-2 flex items-center pr-4 bg-cyan-400 text-white px-4 rounded-md m-2 cursor-pointer hover:bg-cyan-500"
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => handleDelete(item.id)}
                    className=" py-2 flex items-center pr-4 bg-red-700 text-white px-4 rounded-md m-2 cursor-pointer hover:bg-red-800"
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
