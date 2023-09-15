import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {
  const [list, setList] = useState([]);
  const [imageChanged, setImageChanged] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [idUser, setIdUser] = useState(null);
  const isLogin = localStorage.getItem("isLogin");
  const [reload, setReload] = useState(false);
  // Get Data Upload

  const getData = async () => {
    const response = await axios.get("http://localhost:3004/uploads");
    if (response.status === 200) {
      setList(response.data);
    }
  };

  const getCart = async () => {
    const response = await axios.get("http://localhost:3004/carts");
    if (response.status === 200) {
      setListProduct(response.data);
    }
  };

  // Get data User

  const getDataUser = async () => {
    const response = await axios.get("http://localhost:3004/user");
    if (response.status === 200) {
      setListUser(response.data);
    }
  };

  // Kiểm tra id đang đăng nhập

  const obj = listUser.find((item) => item.email == isLogin);
  const idLogin = obj ? obj.id : "";

  useEffect(() => {
    getData();
    getDataUser();
    getCart();
  }, [setList, setListProduct, idLogin, reload]);

  return (
    <Provider
      value={{
        list,
        setList,
        getData,
        listUser,
        listProduct,
        idLogin,
        setReload,
        reload,
      }}
    >
      {children}
    </Provider>
  );
}

export { Context, MyContext };
