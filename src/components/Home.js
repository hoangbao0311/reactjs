import React from "react";
import css from "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [list, setList] = useState([]);
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
  return (
    <div id="columns">
      {list.map((item) => (
        <div key={item.id}>
          <figure>
            <img src={item.image} />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Home;
