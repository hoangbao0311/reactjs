import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";

const EditPost = () => {
  const { id } = useParams();
  // const [title, setTitle] = useState(obj ? obj.title : "");
  // const [content, setContent] = useState(obj ? obj.content : "");

  const { list, setList, getData } = useContext(Context);

  const obj = list.find((item) => item.id == id);

  useEffect(() => {
    // obj;
  }, []);

  return (
    <div className="flex flex-col ">
      <div>Edit</div>
      <p>ID</p>
      <input type="text" name="" value={id} disabled />
      <p>Title</p>
      <input type="text" name="" value={obj ? obj.title : ""} />
      <p>content</p>
      <input type="text" name="" value={obj ? obj.content : ""} />
      <p>Image</p>
      {obj ? (
        <img className="flex-1 w-44" src={obj.image} alt="" />
      ) : (
        <p>No Image</p>
      )}
    </div>
  );
};

export default EditPost;
