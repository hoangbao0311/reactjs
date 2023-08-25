import React, { useState, useEffect } from "react";
import axios from "axios";

export const User = () => {
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3004/user");
    if (response.status === 200) {
      setList(response.data);
      console.log(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex border-[1px] border-stone-300">
        <p className="w-[50px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
          ID
        </p>
        <p className="w-[354px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
          Email
        </p>
        <p className="w-60 py-2 flex items-center border-l-[1px] border-stone-300 px-4 font-bold text-[18px]">
          Password
        </p>
        <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
        <p className=" py-2 flex items-center pr-4  text-white px-4 rounded-md m-2"></p>
      </div>
      {list.map((item) => (
        <div className="flex border-[1px] border-stone-300">
          <p className="w-[50px] py-2 flex items-center border-l-[1px] border-stone-300 px-4 bg-slate-300">
            {item.id}
          </p>
          <p className="w-[354px] py-2 flex items-center border-l-[1px] border-stone-300 px-4">
            {item.email}
          </p>
          <p className="flex-1 py-2 flex items-center border-l-[1px] border-stone-300 px-4">
            {item.password}
          </p>
          <p className=" py-2 flex items-center pr-4 bg-cyan-400 text-white px-4 rounded-md m-2">
            Edit
          </p>
          <p className=" py-2 flex items-center pr-4 bg-red-700 text-white px-4 rounded-md m-2">
            Delete
          </p>
        </div>
      ))}
    </div>
  );
};
export default User;
