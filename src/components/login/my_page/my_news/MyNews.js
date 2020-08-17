import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./myNews.style.css"
import axios from "axios"


const MyNews = () => {

  const [list, setList] = useState({
    "title" : null,
    "regDate" : null,
    "link" : null,
  })

  useEffect(()=>{
    axios.get(`http://localhost:8080/news/getSavedNews/${"muffin"}`)
      .then((response)=>{
        //setList(response.data)
      })
      .catch((error)=>{
        throw error
      })
  },[])


  return (
    <>
      <div className="documentroom_container">
        <div className="documentroom_table">
          <div className="table_head">
            <div className="table_my_comment_head_text1">제목</div>
            <div className="table_my_comment_head_text2">날짜</div>
          </div>
            <ul className="post-ul">
              <li className="post-li">
                <ul className="post-row-list">
                  <a href={list.link}>
                    <li className="post-my_row-list-item1">
                      {list.title}
                    </li>
                  </a>
                  <li className="post-my_row-list-item3">{list.regDate}</li>
                </ul>
              </li>
            </ul>
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
      </>
    )
}
export default MyNews
