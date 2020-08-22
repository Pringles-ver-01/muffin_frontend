import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./search.style.css";
import { StockPage } from "../stocks";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
import axios from "axios";

const Search = () => {
  const [newsList, setNewsList] = useState([])
  const showDetail = () =>{  }

  const [pageArr, setPageArr] = useState([])
  const [prev, setPrev ] = useState(false)
  const [next, setNext ] = useState(false)
  const [page, setPage ] = useState(1)
  const [range, setRange] = useState(1)
  const getAll = (page, range) => {
    setPage(page)
    setRange(range)
    setPageArr([])
    setNewsList([])
    axios
      .get(`http://localhost:8080/news/pagination/${page}/${range}`)
      .then((response)=>{
          console.log(response.data)
          response.data.list.map((item) => {
            setNewsList((newsList) => [...newsList, item])
          })
          let i = 0
          const startPage = response.data.pagination.startPage
          const endPage = response.data.pagination.endPage
          if (
            response.data.pagination.pageCnt <
            startPage + response.data.pagination.rangeSize
          ) {
            for (i; i < response.data.pagination.pageCnt - startPage + 1; i++)
              setPageArr((pageArr) => [...pageArr, startPage + i])
          } else {
            for (i; i < response.data.pagination.rangeSize; i++)
              setPageArr((pageArr) => [...pageArr, startPage + i])
          }
          setPrev(response.data.pagination.prev)
          setNext(response.data.pagination.next)
        }
      )
      .catch((error)=>console.log('error'))
  }
  useEffect(()=>{
    getAll(1, 1)
  },[])


  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentroom_container">
              <div className="documentroom_text">검색결과</div>
              ///////////////////////////////////////////////////////////////////////////////

              <div>
                <StockPage />
              </div>

              ///////////////////////////////////////////////////////////////////////////////
              <div className="stock_detail_section"></div>

              <div className="documentroom_search_container">
                <div className="news_search_table">
                  {newsList.map((item) => (
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
                            <Link to={`/news/detail/${item.newsId}`}>
                              <div className="news_title_div" onClick={()=>{
                                showDetail(item.newsTitle)
                              }}>
                                {item.newsTitle}
                              </div>
                            </Link>

                            <div className="news_summary_div">
                              {item.summary}
                            </div>
                          </li>
                          <li className="post-row-list-item4">2020-08-08</li>
                        </ul>
                      </li>
                    </ul>
                  ))}
                </div>
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

export default Search;
