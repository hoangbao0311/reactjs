import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/context";

const Order = () => {
  const { listProduct, idLogin, list, setReload, getCart } =
    useContext(Context);
  setReload(true);

  // Tìm ra các order có userId trùng với id đang đăng nhập
  const userOrders = listProduct.filter((order) => order.userId === idLogin);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-8 justify-center items-center">
        {/* map các order đã lọc ra thuộc id đăng nhập */}
        {userOrders.map((order, index) => (
          <div
            className=" w-1/2 flex flex-col gap-5 m-3 shadow-xl p-5 border-t-8 border-[#0C713D] rounded-md"
            key={index}
          >
            <h2 className="font-bold text-xl shadow-2xl">
              Mã đơn hàng: {order.id}
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
                <div className="flex gap-2">
                  Trạng thái đơn hàng:{" "}
                  <p className="text-blue-700"> {order.confirm}</p>
                </div>
                Tổng tiền: {parseInt(order.totalPrice).toLocaleString("vi-VN")}{" "}
                đ
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
