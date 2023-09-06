import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../context/Context";

const Bookmark = () => {
  const { list, listProduct, idLogin } = useContext(Context);

  const obj = listProduct.find((item) => item.userId == idLogin);

  const product = obj.products;
  let productImages = [];
  let image = [];

  product.forEach((element) => {
    const objImg = list.filter((item) => item.id == element);
    image = objImg.map((item) => item.image);
    productImages = [...image, ...image];
  });

  return (
    <div>
      <div>Bookmark 1 </div>
      <div className="flex gap-5">
        {productImages.map((item) => {
          return <img className="h-52" src={item} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Bookmark;
