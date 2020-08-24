<<<<<<< HEAD
import React,{useState} from "react";
import {useHistory, Link, Route} from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {Home} from "../home"
import { Search } from "../search"
=======
import React, { useState } from "react";
import { useHistory, Link, Route } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { Home } from "../home";
import { Search } from "../search";
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
import LogoBlackIcon from "../../../assets/home/Logo_black.png";
import "./navbar.style.css";

const active = {
  fontSize: "13.5px",
  fontFamily: "NanumSquareB",
  cursor: "pointer",
  width: "80px",
  height: "33px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  border: "1px solid var(--greenish-teal)",
  borderRadius: "16.5px",
  outline: "none",

  color: "var(--greenish-teal)",
};

const Navbar = () => {
  const history = useHistory();

  const onClickLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("logined_user");
    history.push("/");
  };

<<<<<<< HEAD
  const [searchWord , setSearchWord] = useState("")
  const onChangeNewsSearch = (e) => {
    setSearchWord(e.target.value)
  }
  const searchNews = () => {
    if(searchWord === ""){
      alert('검색어를 입력하세요')
    } else {
      console.log(searchWord)
      window.location.assign(`/search/${searchWord}`);
    }

  }
=======
  const [searchWord, setSearchWord] = useState("");
  const onChangeNewsSearch = (e) => {
    setSearchWord(e.target.value);
  };
  const searchNews = () => {
    if (searchWord === "") {
      alert("검색어를 입력하세요");
    } else {
      console.log(searchWord);
      window.location.assign(`/search/${searchWord}`);
    }
  };
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444

  return (
    <div className="container">
      <div className="nav-container">
        <Link to="/home">
          <div className="logo-container">
            <img width="129px" height="40px" src={LogoBlackIcon} />
          </div>
        </Link>

        <div className="search_section">
<<<<<<< HEAD
          <input placeholder="검색" className="search_nav_input"
          value={searchWord}
          onChange={onChangeNewsSearch}/>
          <button
          style={{cursor : "pointer"}}
          className="search_nav_button"
          onClick={()=>{searchNews()}}>
            <FiSearch className = "fisearch"/>
          </button>

=======
          <input
            placeholder="검색"
            className="search_nav_input"
            value={searchWord}
            onChange={onChangeNewsSearch}
          />
          <button
            style={{ cursor: "pointer" }}
            className="search_nav_button"
            onClick={() => {
              searchNews();
            }}
          >
            <FiSearch className="fisearch" />
          </button>
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
        </div>

        <div className="btn-container">
          <div className="btn-p">
            <Link to="/mypage">
              <button className="nav-btn">마이페이지</button>
            </Link>
          </div>
          <button className="nav-btn" onClick={onClickLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
