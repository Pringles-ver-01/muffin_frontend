import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./opinionRegister.css";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";

const OpinionRegister = () => {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],

      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "color",
    "background",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div className="documentroom_container">
            <form>
              <input
                className="form-input input_title"
                placeholder="제목을 입력하세요"
                type="text"
              />
              <div className="w-full mb-4">
                <div className="w-full">
                  <ReactQuill theme="snow" placeholder="내용을 입력하세요" />
                </div>
              </div>
              <div className={"buttons"}>
                <button className="btn btn-default bg-transparent hover:bg-blue-50 text-blue-500 hover:text-blue-600 btn-rounded btn-raised">
                  <Link to="/opinion">취소하기</Link>
                </button>
                <button className="btn btn-default bg-blue-500 hover:bg-blue-600 text-white btn-rounded">
                  <Link to="/opinion">등록하기</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpinionRegister;
