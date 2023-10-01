import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../context/context";
import { toast } from "react-toastify";
import axios from "axios";

const Bookmark = () => {
  const navigate = useNavigate();
  const { list, idLogin, voucherData } = useContext(Context);
  const [reload, setReload] = useState("");
  const [newArrayCart, setNewArrayCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [idCart, setIdCart] = useState(null);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState([]);
  const [voucherInput, setVoucherInput] = useState("");
  const [styleBuy, setStyleBuy] = useState("hidden");
  const [styleNoCart, setStyleNoCart] = useState("block");
  const [selectePay, setSelectPay] = useState("Thanh toán khi nhận hàng");

  const cartArray = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  // XỬ LÝ TÌM CÁC SẢN PHẨM CÓ TRONG GIỎ HÀNG TỪ LOCALSTR
  const results = cartArray.map((item) => {
    const listFind = list?.find((itemList) => {
      return itemList.id === item.id;
    });
    return listFind;
  });
  // --------------
  // XỬ LÝ NÚT INPUT TĂNG GIẢM SỐ LƯỢNG

  // Bắt dữ liệu từ input

  const handleInputChange = (e, itemId) => {
    const { name, value } = e.target;
    // Kiểm tra nếu trường input là "quantity"
    // thì cập nhật updatedQuantity thành giá trị mới từ trường input (value),
    // nếu không giữ nguyên giá trị cũ của quantity.
    const updatedQuantity = name === "quantity" ? value : quantity;
    // Kiểm tra nếu trường input là "idCart" (ID sản phẩm trong giỏ hàng)
    // thì cập nhật updatedIdCart thành giá trị mới từ trường input (value),
    // nếu không giữ nguyên giá trị itemId được truyền vào.
    const updatedIdCart = name === "idCart" ? value : itemId;

    setQuantity(updatedQuantity);
    setIdCart(updatedIdCart);
  };

  // Tìm index sản phẩm cần cập nhật số lượng trong local tìm bằng idCart
  const updatedProductIndex = cartArray.findIndex((item) => item.id === idCart);

  if (updatedProductIndex !== -1) {
    // Tạo bản sao của mảng cartArray để tránh thay đổi trực tiếp
    const updatedCartArray = [...cartArray];
    // Cập nhật số lượng của sản phẩm bằng cách sửa sl của index bấm vào
    updatedCartArray[updatedProductIndex].quantity = parseInt(quantity);

    // Lưu updatedCartArray vào localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartArray));
  }

  // Trả dữ liệu về input defaltValue
  let cartItem = {};

  const getQuantityForItem = (itemId) => {
    // Tìm sản phẩm trong cartItems dựa vào itemId
    cartItem = cartArray.find((item) => item.id === itemId);

    // Nếu tìm thấy sản phẩm, trả về số lượng của nó; ngược lại, trả về 1
    return cartItem ? cartItem.quantity : 1;
  };

  useEffect(() => {
    getQuantityForItem();
  }, [cartItem]);

  // -------------

  const handleDelele = async (id) => {
    // Lọc ra các item khác với id click vào để xóa khỏi giỏ hàng
    const newCartArray = cartArray.filter((item) => {
      return item.id !== id;
    });

    await localStorage.setItem("cartItems", JSON.stringify(newCartArray));

    setReload(newCartArray);
    toast.warning("Đã xóa sản phẩm");
  };

  // Handle mua hàng

  const handleClickBuy = async (e) => {
    e.preventDefault();

    if (address.length < 1 || name.length < 1 || phone.length < 1) {
      toast.warning("Vui lòng nhập thông tin đầy đủ");
      return;
    }
    const cartArray = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];

    const response = await axios.post("http://localhost:3004/carts", {
      userId: idLogin,
      products: cartArray,
      totalPrice: total,
      address: address,
      name: name,
      phone: phone,
      pay: selectePay,
      confirm: "Chờ xác nhận",
    });
    if (response.status === 201) {
      toast.success("Đặt hàng thành công !");
      localStorage.removeItem("cartItems");
      navigate("/carts/order");
    }

    setReload("ss");
  };

  const buttonBuy = ` ${styleBuy} h-10 w-56 justify-center  py-2 font-medium text-lg flex items-center bg-green-700 text-white px-6 rounded-3xl m-2 cursor-pointer hover:bg-red-800`;
  const infoNoCart = ` ${styleNoCart} flex justify-center font-bold text-xl my-8`;
  useEffect(() => {
    if (cartArray.length != 0) {
      setStyleBuy("block");
      setStyleNoCart("hidden");
    } else {
      setStyleBuy("hidden");
      setStyleNoCart("block");
    }
  }, [reload]);

  // Voucher

  let priceVoucher = 0;
  let total = 0;
  let tongtien = 0;

  const findVoucher = voucherData.find((item) => item.code == voucherInput);

  if (findVoucher) {
    priceVoucher = findVoucher.deals;
    cartArray.map((item) => {
      tongtien += parseFloat(item?.price) * parseFloat(item?.quantity);
      return tongtien;
    });
    total = tongtien - priceVoucher;
    if (total < 0) {
      total = 0;
    }
  } else {
    cartArray.map((item) => {
      total += parseFloat(item?.price) * parseFloat(item?.quantity);
      return total;
    });
  }

  return (
    <div>
      <Link to="/carts/order">Sản phẩm đã đặt hàng</Link>
      <div className={infoNoCart}>Chưa có sản phẩm nào trong giỏ</div>
      <div className="flex gap-5 flex-col items-center">
        {results?.map((item, index) => {
          return (
            <div
              key={index}
              className="h-28 border-t-[1px] border-b-slate-700 flex w-1/2 justify-between items-center "
            >
              <img className="h-24 flex-1" src={item?.image} alt="" />
              <div className="w-1/2">{item?.title}</div>
              <div className="mr-3 flex-1 flex gap-2 text-lg font-medium">
                {parseInt(item?.price).toLocaleString("vi-VN")}
                <div>đ</div>
              </div>
              {cartItem ? (
                <div className="flex-1">
                  <input
                    className="text-lg text-[#0C713D] border-[#0C713D] border-[1px] p-1 px-2 w-16 h-8 outline-none"
                    type="number"
                    name="quantity"
                    min="1"
                    defaultValue={getQuantityForItem(item?.id)}
                    onChange={(e) => handleInputChange(e, item.id)}
                  />
                </div>
              ) : (
                <div>loading ...</div>
              )}

              <div
                className="flex-1 h-8 w-16 justify-center py-2 font-medium text-lg flex items-center bg-red-700 text-white rounded-3xl m-2 cursor-pointer hover:bg-red-800"
                onClick={() => handleDelele(item.id)}
              >
                Xóa
              </div>
            </div>
          );
        })}
        <div>
          <h1 className="font-bold text-xl">
            Tổng tiền: {parseInt(total).toLocaleString("vi-VN")} Đ
          </h1>
        </div>
        <form
          onSubmit={handleClickBuy}
          className="w-1/2 flex flex-col items-center"
        >
          <div className="w-full flex flex-col gap-4">
            <div className="font-bold">THỜI GIAN GIAO HÀNG: Giao Ngay</div>
            <div className="font-bold">Nhập thông tin giao hàng</div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="outline-none border-b-2 text-base w-full h-8"
              type="text"
              placeholder="Nhập địa chỉ giao hàng"
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border-b-2 text-base w-full h-8"
              type="text"
              placeholder="Nhập họ tên"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="outline-none border-b-2 text-base w-full h-8"
              type="number"
              placeholder="Nhập số điện thoại"
            />
            <div className="flex">
              <div className="flex flex-1 items-center">
                <input
                  type="radio"
                  id="drink"
                  name="category"
                  value="Thanh toán khi nhận hàng"
                  className="mr-2"
                  checked
                  onChange={(e) => setSelectPay(e.target.value)}
                />
                <label className="cursor-pointer" htmlFor="drink">
                  <h1 className="text-lg py-1 px-4">
                    Thanh Toán Khi Nhận Hàng
                  </h1>
                </label>
              </div>
              <div className="flex items-center flex-1">
                <input
                  value={voucherInput}
                  onChange={(e) => setVoucherInput(e.target.value)}
                  className="outline-none border-b-2 text-base w-full h-8"
                  type="text"
                  placeholder="Nhập voucher (nếu có)"
                />
              </div>
            </div>
          </div>
          {idLogin && (
            <button
              type="submit"
              onClick={handleClickBuy}
              className={buttonBuy}
            >
              Tiến hành đặt hàng
            </button>
          )}
        </form>
        {!idLogin && (
          <button className="flex text-xl">
            <p className="mr-1">Vui lòng </p>
            <Link className="font-bold cursor-pointer" to="/login">
              Đăng nhập
            </Link>
            <p className="ml-1">trước khi thanh toán</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Bookmark;
