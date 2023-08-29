import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {
  const [list, setList] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3004/uploads");
    if (response.status === 200) {
      setList(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, [setList]);

  return <Provider value={{ list, setList, getData }}>{children}</Provider>;
}

export { Context, MyContext };
