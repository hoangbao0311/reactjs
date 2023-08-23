import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-layout-masonry";

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
    <Masonry columns={6} gap={8}>
      {list.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
        </div>
      ))}
    </Masonry>
  );
};

export default Home;
