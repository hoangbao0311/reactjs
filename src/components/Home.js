import React, { useState, useEffect, useContext } from "react";
import { Modal } from "antd";
import { Context } from "../context/context";
import { toast } from "react-toastify";
import pic1 from "../image/Slide/gdn-125k-osmanthus_1280-534-new-20230829103846.png";
import icon from "../image/icon_tealeaves.png";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [user, setUser] = useState(null);
  const [titles, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [id, setId] = useState(null);
  const [value, setValue] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [contents, setContent] = useState(null);
  const [product, setProduct] = useState(null);
  const [styleSave, setStyleSave] = useState("block");
  const [styled, setStyled] = useState("hidden");
  const [selectedCategory, setSelectedCategory] = useState("THỨC UỐNG");
  const [open, setOpen] = useState(false);
  // context
  const { list, isLogin } = useContext(Context);

  // Chuyển sang mảng
  const cartArray = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
  // Tạo đối tượng sản phẩm
  const currentCartValue = { id: id, quantity: quantity, price: price };

  // Lấy mảng sản phẩm từ localStorage (nếu có)
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  useEffect(() => {}, [styleSave]);

  const handleImageClick = (image, title, content, user, id, price, value) => {
    setSelectedImage(image);
    setTitle(title);
    setContent(content);
    setUser(user);
    setId(id);
    setProduct(id);
    setPrice(price);
    setValue(value);
    setOpen(true);

    // Kiểm tra sp có trong mảng cartArray hay chưa để xử lý ẩn hiện nút mua
    const productExists = cartArray.find((item) => item.id === id);

    if (productExists) {
      setStyleSave("hidden");
      setStyled("block");
    } else {
      setStyleSave("block");
      setStyled("hidden");
    }
  };

  const handleBuy = () => {
    setStyleSave("hidden");
    setStyled("block");

    cartArray.push(product);

    cartItems.push(currentCartValue);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    toast.success("Đã thêm vào giỏ");
  };

  // Css button save
  const buttonClassSave = ` ${styleSave} h-10 py-2 font-medium text-lg text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer flex items-center`;
  const buttonClassSaved = ` ${styled} h-10 py-2 font-medium text-lg text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer flex items-center`;

  // Phân loại đồ uống
  const listCafe = list.filter((item) => item.type === "Cà Phê");
  const listTea = list.filter((item) => item.type === "TRÀ");
  const listFreeze = list.filter((item) => item.type === "FREEZE");
  const listBagCafe = list.filter((item) => item.type === "Cà Phê Gói");
  const listSnack = list.filter((item) => item.type === "Snack");
  const listBakery = list.filter((item) => item.type === "Bakery");
  const listDaxay = list.filter((item) => item.type === "Đá Xay");

  return (
    <div className="flex justify-center">
      {selectedImage && (
        <>
          <Modal
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={800}
          >
            <div className=" flex justify-center p-7 rounded-3xl">
              <div className="bg-[#ffffff] rounded-2xl text-[12px] p-5 flex justify-around">
                <div className="flex gap-6 w-auto h-auto ">
                  <div className="bg-white w-full h-full flex flex-col flex-1">
                    <img
                      className="bg-white w-96"
                      src={selectedImage}
                      alt="Selected"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-5">
                    <h1 className="font-bold text-[24px] leading-7">
                      {titles}
                    </h1>
                    <p className="text-[16px]">{contents}</p>
                    <p className="font-bold text-[24px] leading-7">
                      {parseInt(price).toLocaleString("vi-VN")} đ
                    </p>
                    <div className="flex gap-6 flex-end"></div>

                    <div className="flex items-center gap-5">
                      {value == "on" ? (
                        <div
                          onClick={() => handleBuy()}
                          className={buttonClassSave}
                        >
                          Add to cart
                        </div>
                      ) : (
                        <div className="text-red-700 border-red-700 border-[1px] p-2 px-3 cursor-pointer font-bold">
                          HẾT HÀNG
                        </div>
                      )}
                      {value == "on" ? (
                        <div className={buttonClassSaved}>Đã thêm vào giỏ</div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      )}

      <div className="flex flex-col gap-8">
        <div className="mx-20 ">
          <img className="w-full" src={pic1} alt="" />
        </div>
        <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin">
          <h1>THỨC UỐNG</h1>
        </div>
        <div className="flex justify-center">
          <img src={icon} alt="" />
        </div>
        <div className="flex justify-center gap-20 items-center">
          <div className="flex gap-10">
            <div className="mb-4">
              <input
                type="radio"
                id="drink"
                name="category"
                value="THỨC UỐNG"
                className="mr-2 opacity-0"
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="cursor-pointer" htmlFor="drink">
                <h1
                  className={`text-2xl py-1 px-4 ${
                    selectedCategory === "THỨC UỐNG"
                      ? "text-[#0C713D] border-y-[1px] border-[#0C713D]"
                      : ""
                  }`}
                >
                  THỨC UỐNG
                </h1>
              </label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="snacks"
                name="category"
                value="SNACKS"
                className="mr-2 opacity-0"
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="cursor-pointer" htmlFor="snacks">
                <h1
                  className={`text-2xl py-1 px-4 ${
                    selectedCategory === "SNACKS"
                      ? "text-[#0C713D] border-y-[1px] border-[#0C713D]"
                      : ""
                  }`}
                >
                  SNACKS
                </h1>
              </label>
            </div>
            <div className="mb-4">
              <input
                type="radio"
                id="bakery"
                name="category"
                value="BAKERY"
                className="mr-2 opacity-0"
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label className="cursor-pointer" htmlFor="bakery">
                <h1
                  className={`text-2xl py-1 px-4 ${
                    selectedCategory === "BAKERY"
                      ? "text-[#0C713D] border-y-[1px] border-[#0C713D]"
                      : ""
                  }`}
                >
                  BAKERY
                </h1>
              </label>
            </div>
          </div>
        </div>
        {selectedCategory === "THỨC UỐNG" && (
          <div>
            {/* CF */}
            {listCafe.length !== 0 && (
              <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-8 ">
                <h1 className="border-y-[1px] border-[#0C713D] px-5">Cà phê</h1>
              </div>
            )}
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listCafe.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer "
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* DAXAY */}
            {listDaxay.length !== 0 && (
              <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-8 ">
                <h1 className="border-y-[1px] border-[#0C713D] px-5">Đá Xay</h1>
              </div>
            )}
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listDaxay.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* TRA */}
            {listTea.length !== 0 && (
              <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-8 ">
                <h1 className="border-y-[1px] border-[#0C713D] px-5">Trà</h1>
              </div>
            )}
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listTea.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
            {listFreeze.length !== 0 && (
              <div className="flex justify-center font-['Lora'] text-[#0C713D] text-4xl font-thin my-8 ">
                <h1 className="border-y-[1px] border-[#0C713D] px-5">FREEZE</h1>
              </div>
            )}
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listFreeze?.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
            {listBagCafe.length !== 0 && (
              <div>
                <h1>Cà Phê Gói</h1>
              </div>
            )}
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listBagCafe.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory === "SNACKS" && (
          <div>
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listSnack.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory === "BAKERY" && (
          <div>
            <div className="grid gap-x-8 gap-y-12 grid-cols-4">
              {listBakery.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center gap-5 p-4 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      item.image,
                      item.title,
                      item.content,
                      item.user,
                      item.id,
                      item.price,
                      item.value
                    )
                  }
                >
                  <img
                    className="w-48"
                    alt={`Image ${item.id}`}
                    key={item.id}
                    src={item.image}
                  />
                  <div className="text-lg">{item.title}</div>
                  <div className="text-[#0C713D] font-black text-lg font-[Tahoma]">
                    {parseInt(item.price).toLocaleString("vi-VN")} đ
                  </div>
                  {item.value == "on" ? (
                    <div className="text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 cursor-pointer">
                      ĐẶT HÀNG
                    </div>
                  ) : (
                    <div className="text-red-700 border-red-700 border-[1px] p-1 px-2 cursor-pointer">
                      HẾT HÀNG
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
