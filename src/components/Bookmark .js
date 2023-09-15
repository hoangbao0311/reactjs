import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";
import { toast } from "react-toastify";

const Bookmark = () => {
  const { list } = useContext(Context);
  const [imgId, setImgId] = useState([]);
  // Lấy data local
  const bookmarkArray = localStorage.getItem("bookmark")
    ? JSON.parse(localStorage.getItem("bookmark"))
    : [];

  // Tìm các sp trùng với id có trên localStorage đã lưu
  const results = bookmarkArray.map((item) => {
    const filter = list?.find((img) => {
      return img.id === item;
    });
    return filter;
  });

  useEffect(() => {}, [imgId]);

  const handleClick = (id) => {
    // Lọc ra các id khác với id click vào để xóa
    const arrUnsave = results?.filter((item) => {
      return item.id != id;
    });
    console.log("backarr", arrUnsave);
    // tạo mảng mới để đưa vào localStorage
    const newBookmark = arrUnsave?.map((id) => {
      return id.id;
    });
    console.log("newarr", newBookmark);
    const newBookmarkStorage = JSON.stringify(newBookmark);
    localStorage.setItem("bookmark", newBookmarkStorage);

    setImgId(newBookmark);
    toast.success("Đã bỏ lưu bài viết");
  };

  return (
    <div>
      <div className="font-bold text-xl my-8">Các ảnh đã lưu</div>
      <div className="flex gap-5 flex-wrap">
        {results?.map((item, index) => {
          return (
            <div key={index} className="border-[1px] border-black">
              <img className="h-52" src={item?.image} alt="" />
              <div
                className=" h-10 justify-center  py-2 font-medium text-lg flex items-center bg-red-700 text-white px-6 rounded-3xl m-2 cursor-pointer hover:bg-red-800"
                onClick={() => handleClick(item.id)}
              >
                Bỏ lưu
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookmark;
