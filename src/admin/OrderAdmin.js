import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/context";
import axios from "axios";
import { toast } from "react-toastify";

const OrderAdmin = () => {
  const [type, setType] = useState("Đơn Chưa Xác Nhận");
  const { listProduct, list, getCart } = useContext(Context);

  useEffect(() => {
    getCart();
  }, []);

  const listOrders = listProduct.filter(
    (order) => order.confirm === "Chờ xác nhận"
  );

  const listOrdersConfirm = listProduct.filter(
    (order) => order.confirm !== "Chờ xác nhận"
  );

  const updateData = async (id) => {
    try {
      await axios.patch(`https://frt6fs-3004.csb.app/carts/${id}`, {
        confirm: "Đã xác nhận",
      });
      toast.success("Đã xác nhận đơn hàng !");
      getCart();
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật dữ liệu");
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.patch(`https://frt6fs-3004.csb.app/carts/${id}`, {
        confirm: "Đã hủy",
      });
      toast.warning("Đã hủy đơn hàng !");
      getCart();
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi cập nhật dữ liệu");
    }
  };

  return (
    <div className="h-full">
      <select
        onChange={(e) => setType(e.target.value)}
        className="rounded-[4px] border h-[40px] w-1/4 pl-[10px]"
        name="type"
      >
        <option value={"Đơn Chưa Xác Nhận"}>Đơn Chưa Xác Nhận</option>
        <option value={"Đơn Đã Xác Nhận"}>Đơn Đã Xác Nhận</option>
      </select>
      <div className="h-full">
        {type == "Đơn Chưa Xác Nhận" && (
          <div>
            <div className="flex-1">
              <div className="flex flex-col gap-8 justify-center items-center">
                {listOrders.map((order, index) => (
                  <div
                    className=" w-1/2 flex flex-col gap-5 m-3 shadow-xl p-5 border-t-8 border-[#0C713D] rounded-md"
                    key={index}
                  >
                    <h2 className="font-bold text-xl shadow-2xl">
                      Đơn hàng số {order.id}
                    </h2>
                    <ul className="flex flex-col gap-2">
                      {/* Lấy các đơn đặt hàng ra bằng map */}
                      {order.products.map((productInOrder, productIndex) => {
                        // Tìm sản phẩm trong danh sách sản phẩm
                        const product = list.find(
                          (item) => item.id === productInOrder.id
                        );
                        if (product) {
                          return (
                            <li
                              className="border-t-[1px] font-bold flex items-center m-2 my-4"
                              key={productIndex}
                            >
                              <img
                                className="h-24"
                                src={product.image}
                                alt=""
                              />
                              {product.title} ({productInOrder.quantity})
                            </li>
                          );
                        }
                        return null;
                      })}
                      <div className="font-bold text-xl text-green-600 border-t-2 flex flex-col gap-2">
                        <div className="text-base text-black">
                          Hình thức thanh toán: {order.pay}
                        </div>
                        <div className="text-base text-black">
                          Địa chỉ: {order.address}
                        </div>
                        <div className="text-base text-black">
                          Phone: {order.phone}
                        </div>
                        <div>Trạng thái đơn hàng: {order.confirm}</div>
                        Tổng tiền:{" "}
                        {parseInt(order.totalPrice).toLocaleString("vi-VN")} đ
                      </div>
                      {order.confirm === "Chờ xác nhận" && (
                        <div>
                          <div>
                            <button
                              onClick={() => updateData(order.id)}
                              className="h-10 w-56 justify-center  py-2 font-medium text-lg flex items-center bg-green-700 text-white px-6 rounded-3xl m-2 cursor-pointe hover:bg-green-900"
                            >
                              Xác nhận đơn hàng
                            </button>
                            <button
                              onClick={() => deleteData(order.id)}
                              className="h-10 w-56 justify-center  py-2 font-medium text-lg flex items-center bg-red-800 text-white px-6 rounded-3xl m-2 cursor-pointe hover:bg-red-900"
                            >
                              Hủy đơn hàng
                            </button>
                          </div>
                        </div>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {type == "Đơn Đã Xác Nhận" && (
          <div>
            <div className="flex flex-col flex-1 gap-8 justify-center items-center">
              {listOrdersConfirm.map((order, index) => (
                <div
                  className=" w-1/2 flex flex-col gap-5 m-3 shadow-xl p-5 border-t-8 border-[#0C713D] rounded-md"
                  key={index}
                >
                  <h2 className="font-bold text-xl shadow-2xl">
                    Đơn hàng số {order.id}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {/* Lấy các đơn đặt hàng ra bằng map */}
                    {order.products.map((productInOrder, productIndex) => {
                      // Tìm sản phẩm trong danh sách sản phẩm
                      const product = list.find(
                        (item) => item.id === productInOrder.id
                      );
                      if (product) {
                        return (
                          <li
                            className="border-t-[1px] font-bold flex items-center m-2 my-4"
                            key={productIndex}
                          >
                            <img className="h-24" src={product.image} alt="" />
                            {product.title} ({productInOrder.quantity})
                          </li>
                        );
                      }
                      return null;
                    })}
                    <div className="font-bold text-xl text-green-600 border-t-2 flex flex-col gap-2">
                      <div className="text-base text-black">
                        Hình thức thanh toán: {order.pay}
                      </div>
                      <div className="text-base text-black">
                        Địa chỉ: {order.address}
                      </div>
                      <div className="text-base text-black">
                        Phone: {order.phone}
                      </div>
                      <div>Trạng thái đơn hàng: {order.confirm}</div>
                      Tổng tiền:{" "}
                      {parseInt(order.totalPrice).toLocaleString("vi-VN")} đ
                    </div>
                    {order.confirm === "Chờ xác nhận" && (
                      <div>
                        <div>
                          <button
                            onClick={() => updateData(order.id)}
                            className="h-10 w-56 justify-center  py-2 font-medium text-lg flex items-center bg-green-700 text-white px-6 rounded-3xl m-2 cursor-pointe hover:bg-green-900"
                          >
                            Xác nhận đơn hàng
                          </button>
                          <button
                            onClick={() => deleteData(order.id)}
                            className="h-10 w-56 justify-center  py-2 font-medium text-lg flex items-center bg-red-800 text-white px-6 rounded-3xl m-2 cursor-pointe hover:bg-red-900"
                          >
                            Hủy đơn hàng
                          </button>
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderAdmin;
