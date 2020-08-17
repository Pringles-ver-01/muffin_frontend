<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> yoonjung
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./stockList.css";
import ModalBuying from "../../items/ModalBuying";
import ModalSelling from "../../items/ModalSelling";
<<<<<<< HEAD
=======
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./stockList.css";
import { ModalBuying, ModalSelling }from "../items";
>>>>>>> yerimm
=======
import Navbar from "../logined_navbar/Navbar";
import Menu from "../menu/Menu";
>>>>>>> yoonjung


const StockList = () => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

<<<<<<< HEAD
  /*const [stockName, setStockName] = useState("씨젠");
    const [price, setPrice] = useState(
        "310,600");
    const [change, setChange] = useState("+32,000");
    const [changePercentage, setChangePercentage] = useState("+11.84%");
    const [marketCap, setMarketCap] = useState("79,923(억)")
    const [volumeCurrency, setVolumeCurrency] = useState("43,589,400")
    const [arr, setArr] = useState([
        {
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        }
    ])*/

<<<<<<< HEAD
  let stockList = [];

  useEffect(() => {
    stockList = [];
    axios
      .get(`http://localhost:8080/`)
      .then((response) => {
        console.log(`StockList useEffect then from python`);
        response.data.map((element) => {
          stockList.push(element);
        });
      })
      .catch((error) => {
        console.log(`Stocklist useEffect catch from python`);
        throw error;
      });
  }, [stockList]);

=======
  const [stockList, setStockList] = useState([{
    "stockName": "",
    "nowPrice": 0,
    "change": 0,
    "changePercentage": 0,
    "transacAmount": 0,
    "volume": 0
  }])

  useEffect(() => {
=======
const StockList = () => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  /*const [stockName, setStockName] = useState("씨젠");
    const [price, setPrice] = useState(
        "310,600");
    const [change, setChange] = useState("+32,000");
    const [changePercentage, setChangePercentage] = useState("+11.84%");
    const [marketCap, setMarketCap] = useState("79,923(억)")
    const [volumeCurrency, setVolumeCurrency] = useState("43,589,400")
    const [arr, setArr] = useState([
        {
            stockName : stockName,
            price: price,
            change: change,
            changePercentage: changePercentage,
            marketCap: marketCap,
            volumeCurrency: volumeCurrency
        }
    ])*/

  let stockList = [];

  useEffect(() => {
    stockList = [];
>>>>>>> yoonjung
    axios
      .get(`http://localhost:8080/`)
      .then((response) => {
        console.log(`StockList useEffect then from python`);
<<<<<<< HEAD
        setStockList(response.data)
=======
        response.data.map((element) => {
          stockList.push(element);
        });
>>>>>>> yoonjung
      })
      .catch((error) => {
        console.log(`Stocklist useEffect catch from python`);
        throw error;
      });
  }, [stockList]);

<<<<<<< HEAD
>>>>>>> yerimm
=======
>>>>>>> yoonjung
  const linktoDetail = (e) => {
    e.preventDefault();
  };

  return (
    <>
<<<<<<< HEAD
      <div className="documentroom_container">
        <div className="documentroom_text">투자</div>
        <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
          <table className="table documentroom_table w-full">
            <thead>
            <tr>
              <th>종목</th>
              <th>시세</th>
              <th>전일비</th>
              <th>등락률</th>
              <th>시가 총액</th>
              <th>거래량</th>
              <th>거래하기</th>
            </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {stockList.map((item) => (
                <tr onClick={linktoDetail}>
                  <td>
                    <Link to="stock/detail">{item.stockName}</Link>
                  </td>

                  <td>{item.price}</td>
                  <td>{item.change}</td>
                  <td>{item.changePercentage}</td>
                  <td>{item.marketCap}</td>
                  <td>{item.volumeCurrency}</td>
                  <td>
                    <button
                      className="btn btn-default btn-blue text-white btn-rounded"
                      onClick={() => setBuyOpen(true)}
                    >
                      매수
                    </button>
                    <button
                      className="btn btn-default btn-red text-white btn-rounded"
                      onClick={() => setSellOpen(true)}
                    >
                      매도
                    </button>
                  </td>
                </tr>
              ))}
=======
            {stockList.map((item) => (
              <tr onClick={linktoDetail}>
                <td>
                  <Link to="stock/detail">{item.stockName}</Link>
                </td>
                <td>{item.nowPrice}</td>
                <td>{item.change}</td>
                <td>{item.changePercentage}</td>
                <td>{item.transacAmount}</td>
                <td>{item.volume}</td>
                <td>
                  <button
                    className="btn btn-default btn-blue text-white btn-rounded"
                    onClick={() => setBuyOpen(true)}>매수</button>
                  <button
                    className="btn btn-default btn-red text-white btn-rounded"
                    onClick={() => setSellOpen(true)}>매도</button>
                </td>
              </tr>
            ))}
>>>>>>> yerimm
            </tbody>
          </table>
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
=======
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />

            <div className="documentroom_text">투자</div>
            <div className="w-full p-4 mb-4 rounded-lg bg-white border border-grey-100 dark:bg-dark-95 dark:border-dark-90">
              <table className="table documentroom_table w-full">
                <thead>
                  <tr>
                    <th>종목</th>
                    <th>시세</th>
                    <th>전일비</th>
                    <th>등락률</th>
                    <th>시가 총액</th>
                    <th>거래량</th>
                    <th>거래하기</th>
                  </tr>
                </thead>
                <tbody>
                  {stockList.map((item) => (
                    <tr onClick={linktoDetail}>
                      <td>
                        <Link to="stock/detail">{item.stockName}</Link>
                      </td>
>>>>>>> yoonjung

                      <td>{item.price}</td>
                      <td>{item.change}</td>
                      <td>{item.changePercentage}</td>
                      <td>{item.marketCap}</td>
                      <td>{item.volumeCurrency}</td>
                      <td>
                        <button
                          className="btn btn-default btn-blue text-white btn-rounded"
                          onClick={() => setBuyOpen(true)}
                        >
                          매수
                        </button>
                        <button
                          className="btn btn-default btn-red text-white btn-rounded"
                          onClick={() => setSellOpen(true)}
                        >
                          매도
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              <div className="conference_search">
                <input
                  placeholder="주식 종목을 입력해주세요."
                  className="search_input"
                />
                <Link to="" className="search_button">
                  검색
                </Link>
              </div>
            </div>
          </div>
          <div className="conference_search">
            <input
              placeholder="주식 종목을 입력해주세요."
              className="search_input"
            />
            <Link to="" className="search_button">
              검색
            </Link>
          </div>
          <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)} />
          <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)} />
        </div>
      </div>
<<<<<<< HEAD
      <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)} />
      <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)} />
=======
      <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)}/>
      <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)}/>
>>>>>>> yerimm
    </>
  );
};

export default StockList;
