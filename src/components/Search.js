import React, { useState, useEffect, useContext } from "react";
import { BiSearch } from "react-icons/bi";
import { Context } from "../context/context";
import axios from "axios";
import { Button, Modal } from "antd";

const Search = () => {
  const { list } = useContext(Context);
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [titles, setTitle] = useState(null);
  const [contents, setContent] = useState(null);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(null);
  const [value, setValue] = useState(null);

  const handleImageClick = (image, title, content, price, value) => {
    setSelectedImage(image);
    setTitle(title);
    setContent(content);
    setPrice(price);
    setValue(value);
    setOpen(true);
  };

  return (
    <div className=" flex items-center ">
      <div className=" relative">
        <div className="flex  border-[1px] border-[#0C713D] rounded-lg">
          <span className="h-10 pl-4  flex items-center justify-center rounded-l-[20px] text-gray-500 py-6">
            <BiSearch size={24} />
          </span>
          <input
            type="text"
            className="text-gray-500 outline-none  px-4 py-2 rounded-r-[20px] w-full h-12"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {selectedImage && (
          <>
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={800}
            >
              <div className="bg-[#E9E9E9] flex justify-center p-7 rounded-3xl ">
                <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around">
                  <div className="flex gap-6 w-auto h-auto ">
                    <div className="bg-[#E9E9E9] w-full h-full flex flex-col flex-1">
                      <img className="" src={selectedImage} alt="Selected" />
                    </div>
                    <div className="flex-1 flex flex-col gap-5">
                      <h1 className="font-bold text-[24px] leading-7">
                        {titles}
                      </h1>
                      <p className="text-[16px]">{contents}</p>
                      <p className="font-bold text-[24px] leading-7">
                        {parseInt(price).toLocaleString("vi-VN")} đ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </>
        )}
        {isFocused && (
          <div className="flex flex-col h-auto absolute bg-slate-50 pt-3">
            <p
              onClick={() => setIsFocused(false)}
              className="text-end text-[24px] mr-5 text-red-500 font-bold cursor-pointer"
            >
              X
            </p>
            <div>
              {list
                .filter((item) => {
                  return item.title.toLowerCase().includes(search);
                })
                .map((item) => {
                  return (
                    <div
                      className="flex mb-5 bg-slate-50 rounded-xl cursor-pointer "
                      key={item.id}
                      onClick={() =>
                        handleImageClick(
                          item.image,
                          item.title,
                          item.content,
                          item.price,
                          item.value
                        )
                      }
                    >
                      <img className="h-10" src={item.image} alt="" />
                      <p className="flex-1 py-2 flex items-center border-l-[1px] border-stone-300 px-4">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
