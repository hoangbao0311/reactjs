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
      <div>
        {/* map các order đã lọc ra thuộc id đăng nhập */}
        {userOrders.map((order, index) => (
          <div
            className="border-[2px] border-red-500 w-1/2 flex flex-col gap-5 m-3"
            key={index}
          >
            <h2 className="font-bold text-xl text-blue-700">
              Đơn hàng số {order.id}
            </h2>
            <ul>
              {/* Lấy các đơn đặt hàng ra bằng map */}
              {order.products.map((productInOrder, productIndex) => {
                // Tìm sản phẩm trong danh sách sản phẩm
                const product = list.find(
                  (item) => item.id === productInOrder.id
                );
                if (product) {
                  return (
                    <li
                      className="border-y-2 border-black my-2"
                      key={productIndex}
                    >
                      Tên sản phẩm: {product.title}, <br /> Số lượng:{" "}
                      {productInOrder.quantity}
                      <img className="h-24" src={product.image} alt="" />
                    </li>
                  );
                }
                return null;
              })}
              <div className="font-bold text-xl text-green-600">
                Tổng tiền: {order.totalPrice}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
