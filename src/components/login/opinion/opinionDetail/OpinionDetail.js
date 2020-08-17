import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./opinionDetail.style.css";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";

const OpinionDetail = () => {
  const [board, setBoard] = useState(
    JSON.parse(sessionStorage.getItem("opinionDetail"))
  );

  useEffect(() => {
    console.log(board);
  });

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentdetaildiv">
              <div className="documentDetailTitle">
                <div className="Title1">{board.boardTitle}</div>
                <div className="Title2">{board.boardRegdate}</div>
              </div>
            </div>
            <div className="authority">작성자 : {board.nickname}</div>
            <div className="contentdetaildiv">
              <div className="detail_content_01">
                {board.boardContent.split("\n").map(function (item, idx) {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>
            </div>
            <ul className="commentdiv">
              <li className="comment-li">
                <ul className="comment-row-list">
                  <li className="comment-row-list-item1">배고픈거북이</li>
                  <li className="comment-row-list-item2">
                    좋은 정보 감사합니다.
                  </li>
                  <li className="comment-row-list-item3">2020-08-08 10:10</li>
                </ul>
              </li>
            </ul>
            <ul className="commentdiv">
              <li className="comment-li">
                <ul className="comment-row-list">
                  <li className="comment-row-list-item1">귀여운강아지</li>
                  <li className="comment-row-list-item2">
                    집값 문제로 온 나라가 뜨겁다.
                  </li>
                  <li className="comment-row-list-item3">2020-08-08 10:43</li>
                </ul>
              </li>
            </ul>
            <input className="comment_input" />
            <button className="comment_button">댓글달기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpinionDetail;
