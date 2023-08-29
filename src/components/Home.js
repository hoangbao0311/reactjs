import React, { useState, useEffect, useContext } from "react";
import { Button, Modal } from "antd";
import Masonry from "react-layout-masonry";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { Context } from "../context/Context";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titles, setTitle] = useState(null);
  const [contents, setContent] = useState(null);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const { list, setList } = useContext(Context);

  const handleImageClick = (image, title, content) => {
    setSelectedImage(image);
    setTitle(title);
    setContent(content);
    setOpen(true);
  };

  const handleLike = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  // Modal antd
  const [open, setOpen] = useState(false);
  return (
    <div>
      {selectedImage && (
        <>
          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
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
                    <div className="flex gap-6 flex-end">
                      <div
                        className="flex items-center justify-center"
                        onClick={handleLike}
                      >
                        <AiOutlineLike size={26} />
                        <h>{like}</h>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}
      <Masonry columns={6} gap={8}>
        {list.map((item) => (
          <div>
            <img
              onClick={() =>
                handleImageClick(item.image, item.title, item.content)
              }
              alt={`Image ${item.id}`}
              key={item.id}
              src={item.image}
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Home;
