import React, { useState } from "react";
import "./newsList.style.css";
import { Link } from "react-router-dom";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";

const NewsList = () => {
  const [title, setTitle] = useState(
    " 미래에셋자산운용, 초등학생 '온라인 경제교육' 이벤트 진행 "
  );
  const [summary, setSummary] = useState(
    " [파이낸셜뉴스] 미래에셋자산운용은 초등학생을 대상으로 온라인 경제교육 이벤트를 진행한다고 28일 밝혔다. 전국 초등학교는 코로나19 영향으로 지난 4월부터 원격수업과 등교...  "
  );
  const [regDate, setRegDate] = useState("  2020-07-28");
  const [thumbnail, setThumbnail] = useState(
    " https://imgnews.pstatic.net/image/thumb70/018/2020/08/08/4709350.jpg "
  );
  const [address, setAddress] = useState("/detail");
  const [arr, setArr] = useState([
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,

      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
    {
      title: title,
      summary: summary,
      regDate: regDate,
      thumbnail: thumbnail,
      address: address,
    },
  ]);
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentroom_container">
              <div className="documentroom_text">뉴스</div>
              <div className="news_table">
                {arr.map((item) => (
                  <ul className="news-ul">
                    <li className="news-li">
                      <ul className="news-row-list">
                        <li className="post-row-list-item1">
                          <img
                            className="thumbnail-style"
                            src={item.thumbnail}
                            alt="media"
                          />
                        </li>
                        <li>
                          <Link to="/news/detail">
                            <div className="news_title_div">{item.title}</div>
                          </Link>

                          <div className="news_summary_div">{item.summary}</div>
                        </li>
                        <li className="post-row-list-item4">2020-08-08</li>
                      </ul>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="pagination-div">
                <div className="pagination">
                  <Link to={`?pageNo=1`} className="page_button" id="1">
                    1
                  </Link>
                  <Link to={`?pageNo=2`} className="page_button" id="2">
                    2
                  </Link>
                  <Link to={`?pageNo=3`} className="page_button" id="3">
                    3
                  </Link>
                  <Link to={`?pageNo=4`} className="page_button" id="4">
                    4
                  </Link>
                  <Link to={`?pageNo=5`} className="page_button" id="5">
                    5
                  </Link>

                  <Link to={`?pageNo=6`} className="page_button" id="next">
                    다음
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
