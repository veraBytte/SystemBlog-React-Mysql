import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.description || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:3001/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`http://localhost:3001/api/posts/${state.id}`, {
            title,
            description: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:3001/api/posts/`, {
            title,
            description: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button className="secondary_button" onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "arte"}
              name="cat"
              value="arte"
              id="arte"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="arte">arte</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "ciencias"}
              name="cat"
              value="ciencias"
              id="ciencias"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="ciencias">ciencias</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "tecnologia"}
              name="cat"
              value="tecnologia"
              id="tecnologia"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="tecnologia">tecnologia</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "cine"}
              name="cat"
              value="cine"
              id="cine"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="cine">cine</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "ingles"}
              name="cat"
              value="ingles"
              id="ingles"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="ingles">Inlges</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;