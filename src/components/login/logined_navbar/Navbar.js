import React from "react";
import { useHistory, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

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

  return (
    <div className="container">
      <div className="nav-container">
        <Link to="/home">
          <div className="logo-container">
            <img width="129px" height="40px" src={LogoBlackIcon} />
          </div>
        </Link>
        <div className="search_section">
          <input placeholder="검색" className="search_nav_input" />
          <Link to="/search">
            <button className="search_nav_button">
              <FiSearch className="fisearch" />
            </button>
          </Link>
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
