import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./newsDetail.style.css";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";
import axios from "axios";

const NewsDetail = ({ match }) => {
  console.log(match.params.id);

  const [newsTitle, setNewsTitle] = useState("");
  const [newsRegDate, setNewsRegDate] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [newsImage, setNewsImage] = useState("");
  const [newsContents, setNewsContents] = useState("");
  /*const newsId = localStorage.getItem(newsId)*/

  useEffect(() => {
    axios
      .get(`http://localhost:8080/news/getDetail/${match.params.id}`)
      .then(({ data }) => {
        setNewsTitle(data.newsTitle);
        setNewsRegDate(data.newsRegDate);
        setNewsLink(data.newsLink);
        setNewsImage(data.newsThumbnail);
        setNewsContents(data.newsContent);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  });

  /*const save = (emailId) => {
    // 저장 여부 db에서 확인하고 if문으로 돌릴까?
    console.log(newsTitle, emailId)
    axios
      .post(
        `http://localhost:8080/news/saveNews`,
        {
          newsTitle: newsTitle,
          newsRegDate: newsRegDate,
          newsLink: newsLink,
          emailId: emailId,
        },
        {
          "Content-Type": "application/json",
          Authorization: "JWT fefege...",
        }
      )
      .then((response) => {
        alert("뉴스가 스크랩 되었습니다.");
      })
      .catch((error) => {
        console.log(`axios 시도`);
      });
  };*/

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentdetaildiv">
              <div className="newsDetailTitle">
                <div className="newsTitle1">{newsTitle}</div>
                <div className="Title2">{newsRegDate}</div>
                <a className="Title2" href={newsLink}>
                  원문 보기
                </a>
              </div>
            </div>
            <div className="contentdetaildiv">
              <img src={newsImage} className="detail_image_content" />
              <div className="detail_content">
                {newsContents.split("\n").map(function (item, idx) {
                  return (
                    <span key={idx} className="content_style">
                      {item}
                      <br />
                    </span>
                  );
                })}
              </div>

              <Link to="/news" className="list_button">
                목록
              </Link>
              {/*<button
                className="save_button"
                onClick={() => {
                  save();
                }}
              >
                저장
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
