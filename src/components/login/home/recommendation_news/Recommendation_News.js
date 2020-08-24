import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from 'axios';
import "./recommendation_news.style.css";
import {Link} from "react-router-dom";

const Recommendation_News = () => {
  const [newsList, setNewsList] = useState([])
  const url = 'http://localhost:8080'
  const showDetail = () => { }
  useEffect(()=>{
    axios.get(`${url}/news/getList`)
      .then((response)=>{
        setNewsList(response.data)
      })
      .catch((error)=>{
        console.log(`try to effect`)
        throw error
      })
  },[])
=======
import axios from "axios";
import "./recommendation_news.style.css";
import { Link } from "react-router-dom";

const Recommendation_News = () => {
  const [newsList, setNewsList] = useState([]);
  const url = "http://localhost:8080";
  const showDetail = () => {};
  useEffect(() => {
    axios
      .get(`${url}/news/getList`)
      .then((response) => {
        setNewsList(response.data);
      })
      .catch((error) => {
        console.log(`try to effect`);
        throw error;
      });
  }, []);
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444

  return (
    <>
      <div className="recommendation_container">
        {newsList.map((item) => (
          <div key={item.newsId}>
            <div>
              <div>
                <div>
                  <div className="news_title_section">
                    <div className="news_title">
<<<<<<< HEAD
                    <Link to={`/news/detail/${item.newsId}`}>
                      <div className="news_title_style"
                           onClick={()=>{showDetail(item.newsTitle)}}>
                        {item.newsTitle}
                      </div>
                    </Link>
                    </div>
                      <div className="news_regdate">{item.newsRegDate}</div>
                  </div>

=======
                      <Link to={`/news/detail/${item.newsId}`}>
                        <div
                          className="news_title_style"
                          onClick={() => {
                            showDetail(item.newsTitle);
                          }}
                        >
                          {item.newsTitle}
                        </div>
                      </Link>
                    </div>
                    <div className="news_regdate">{item.newsRegDate}</div>
                  </div>
                  {/*<div className="news_summary_section">
                    <div>{item.summary}</div>
                  </div>*/}
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendation_News;
