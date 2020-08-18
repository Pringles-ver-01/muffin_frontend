import React, { useState, useEffect } from "react";
import "./newsList.style.css";
import { Link } from "react-router-dom";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
import axios from 'axios';

 const NewsList = () => {
  /*const [newsIndex, setNewsIndex] = useState(0); */
   const [ newsList, setNewsList ] = useState([
     {
       "newsId" : null,
       "newsTitle" : null,
       "newsRegDate" : null,
       "newsContent" : null,
       "newsThumbnail": null,
      }
   ])
   const test = () =>{
     console.log(newsList.newsId)
   }

   useEffect(()=>{
     axios.get(`http://localhost:8080/news/getList`)
       .then((response)=>{
         console.log('여기예요')
         setNewsList(response.data)
       })
       .catch((error)=>{
         console.log(`try to effect`)
         throw error
       })
   },[])


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
                {newsList.map((item) => (
                  <ul className="news-ul">
                    <li className="news-li">
                      <ul className="news-row-list">
                        <li className="post-row-list-item1">
                          <img
                            className="thumbnail-style"
                            src={item.newsThumbnail}
                            alt="media"
                            key={item.newsTitle}
                          />
                        </li>
                        <li>
                          <div>
                            <Link to={`/news/detail/${item.newsId}`}><div className="news_title_div" onClick={()=>{test(item.newsId)}}>{item.newsTitle}</div></Link>
                          </div>
                        </li>
                        <li>
                          <div className="news_regdate_div">{item.newsRegDate}</div>
                        </li>
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
