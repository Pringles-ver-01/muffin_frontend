<<<<<<< HEAD

import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./search.style.css";
import "../news/newsList.style.css"
=======
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./search.style.css";
import "../news/newsList.style.css";
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
import { StockPage } from "../stocks";
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
import axios from "axios";
<<<<<<< HEAD

const Search = ({match}) => {
  console.log(match.params.searchWord)

  const [newsList, setNewsList] = useState([])
  const showDetail = () =>{  }
  const [searchWord, setSearchWord] = useState('')
  const [pageArr, setPageArr] = useState([])
  const [prev, setPrev ] = useState(false)
  const [next, setNext ] = useState(false)
  const [page, setPage ] = useState(1)
  const [range, setRange] = useState(1)

  const clickNext = () => {
    getAll(pageArr[0] + 5 , range + 1)
  }
  const clickPrev = () => {
    getAll(pageArr[0] - 1 , range - 1)
  }

  const getAll = ( searchWord, page, range) => {
    console.log(searchWord)
    setPage(page)
    setRange(range)
    setSearchWord('')
    setPageArr([])
    setNewsList([])
    axios
      .get(`http://localhost:8080/news/search/${match.params.searchWord}/1/1`)
      .then((response)=> {
        console.log(`검색 결과 : ${response.data.list}`)
          if(response.data.list != 0 ){
            response.data.list.map((item) => {
              setNewsList((newsList) => [...newsList, item] )
            })
          }else{
            alert('검색 결과가 없습니다.')
            window.location.assign('/news');

          }
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




=======

const Search = ({ match }) => {
  console.log(match.params.searchWord);

  const [newsList, setNewsList] = useState([]);
  const showDetail = () => {};
  const [searchWord, setSearchWord] = useState("");
  const [pageArr, setPageArr] = useState([]);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(1);

  const clickNext = () => {
    getAll(pageArr[0] + 5, range + 1);
  };
  const clickPrev = () => {
    getAll(pageArr[0] - 1, range - 1);
  };

  const getAll = (searchWord, page, range) => {
    console.log(searchWord);
    setPage(page);
    setRange(range);
    setSearchWord("");
    setPageArr([]);
    setNewsList([]);
    axios
      .get(`http://localhost:8080/news/search/${match.params.searchWord}/1/1`)
      .then((response) => {
        console.log(`검색 결과 : ${response.data.list}`);
        if (response.data.list != 0) {
          response.data.list.map((item) => {
            setNewsList((newsList) => [...newsList, item]);
          });
        } else {
          alert("검색 결과가 없습니다.");
          window.location.assign("/news");
        }
        let i = 0;
        const startPage = response.data.pagination.startPage;
        const endPage = response.data.pagination.endPage;
        if (
          response.data.pagination.pageCnt <
          startPage + response.data.pagination.rangeSize
        ) {
          for (i; i < response.data.pagination.pageCnt - startPage + 1; i++)
            setPageArr((pageArr) => [...pageArr, startPage + i]);
        } else {
          for (i; i < response.data.pagination.rangeSize; i++)
            setPageArr((pageArr) => [...pageArr, startPage + i]);
        }
        setPrev(response.data.pagination.prev);
        setNext(response.data.pagination.next);
      })

      .catch((error) => console.log("error"));
  };
  useEffect(() => {
    getAll(1, 1);
  }, []);

>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div>
            <div className="documentroom_container">
              <div className="documentroom_text"></div>
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
                          <Link to={`/news/detail/${item.newsId}`}>
<<<<<<< HEAD
                            <div className="news_title_div" onClick={()=>{
                              showDetail(item.newsTitle)
                            }}>
=======
                            <div
                              className="news_title_div"
                              onClick={() => {
                                showDetail(item.newsTitle);
                              }}
                            >
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
                              {item.newsTitle}
                            </div>
                          </Link>
                        </li>
                        <li>
<<<<<<< HEAD
                          <div className="news_regdate_div">{item.newsRegDate}</div>
=======
                          <div className="news_regdate_div">
                            {item.newsRegDate}
                          </div>
>>>>>>> efdffe48a4a430d281b171eb9e684aa9ecd1a444
                        </li>
                      </ul>
                    </li>
                  </ul>
                ))}
              </div>

              <div className="pagination-div">
                <div className="pagination">
                  {prev && (
                    <div className="page_button" id="prev" onClick={clickPrev}>
                      이전
                    </div>
                  )}

                  {pageArr.map((pagenum) => (
                    <div
                      className="page_button"
                      key={pagenum}
                      onClick={() => {
                        getAll(pagenum, range);
                      }}
                    >
                      {pagenum}
                    </div>
                  ))}

                  {next && (
                    <div className="page_button" id="next" onClick={clickNext}>
                      다음
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Search;

