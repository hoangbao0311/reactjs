import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-layout-masonry";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [titles, setTitle] = useState(null);
  const [contents, setContent] = useState(null);
  const [list, setList] = useState([]);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const handleImageClick = (imageSrc, title, content) => {
    setSelectedImage(imageSrc);
    setTitle(title);
    setContent(content);
  };

  const getData = async () => {
    const response = await axios.get("http://localhost:3004/uploads");
    if (response.status === 200) {
      setList(response.data);
      console.log(response.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleLike = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  };

  return (
    <div>
      {selectedImage && (
        <div className="bg-[#E9E9E9] flex justify-center p-7 rounded-3xl ">
          <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around w-1/2">
            <div className="flex gap-6 w-auto h-auto ">
              <div className="bg-[#E9E9E9] w-full h-full flex flex-col flex-1">
                <img className="" src={selectedImage} alt="Selected" />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <h1 className="font-bold text-[24px] leading-7">{titles}</h1>
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
