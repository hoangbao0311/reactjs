import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {
  const [list, setList] = useState([]);
  const [imageChanged, setImageChanged] = useState(false);
  const [listUser, setListUser] = useState([]);

  // Get Data Upload

  const getData = async () => {
    const response = await axios.get("http://localhost:3004/uploads");
    if (response.status === 200) {
      setList(response.data);
    }
  };

  useEffect(() => {
    getData();
    getDataUser();
  }, [setList]);

  // Get data User

  const getDataUser = async () => {
    const response = await axios.get("http://localhost:3004/user");
    if (response.status === 200) {
      setListUser(response.data);
    }
  };

  return (
    <Provider value={{ list, setList, getData, listUser }}>{children}</Provider>
  );
}

export { Context, MyContext };
