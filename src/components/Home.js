import React from "react";
import pt1 from "../image/home/00eaec1787b49c62495e874ccad194cf.jpg";
import pt2 from "../image/home/57cecbae6f60f5ef565b17837c06c5ac.jpg";
import pt3 from "../image/home/dddba4f3e561a2a06ba955648b7a5138.jpg";
import pt4 from "../image/home/efb0607887624a7bdcfa8bb86d0f5ab7.jpg";
import pt5 from "../image/home/4.jpg";
import css from "./Home.css";

const Home = () => {
  return (
    // <div className="grid grid-cols-6">
    //   <img src={pt1} alt="" />

    //   <img src={pt2} alt="" />

    //   <img src={pt3} alt="" />

    //   <img src={pt4} alt="" />

    //   <img src={pt1} alt="" />

    //   <img src={pt2} alt="" />

    //   <img src={pt3} alt="" />

    //   <img src={pt4} alt="" />
    //   <img src={pt3} alt="" />

    //   <img src={pt4} alt="" />

    //   <img src={pt1} alt="" />

    //   <img src={pt2} alt="" />
    // </div>
    <div id="columns">
      <figure>
        <img src={pt1} alt="" />
      </figure>

      <figure>
        <img src={pt1} alt="" />
      </figure>

      <figure>
        <img src={pt4} alt="" />
      </figure>

      <figure>
        <img src={pt3} alt="" />
      </figure>

      <figure>
        <img src={pt5} alt="" />
      </figure>
      <figure>
        <img src={pt2} alt="" />
      </figure>
      <figure>
        <img src={pt1} alt="" />
      </figure>
      <figure>
        <img src={pt5} alt="" />
      </figure>
      <figure>
        <img src={pt1} alt="" />
      </figure>

      <figure>
        <img src={pt4} alt="" />
      </figure>
      <figure>
        <img src={pt5} alt="" />
      </figure>
      <figure>
        <img src={pt3} alt="" />
      </figure>

      <figure>
        <img src={pt2} alt="" />
      </figure>
    </div>
  );
};

export default Home;
