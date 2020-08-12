import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./stockList.css";
import ModalBuying from "../../items/ModalBuying";
import ModalSelling from "../../items/ModalSelling";

export const getStockList = (data) => ({
  type: "GET_STOCKS_LIST",
  payload: data,
});

export const stocksReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_STOCKS_LIST":
      return action.payload;
    default:
      return state;
  }
};

export const stockList = () => (dispatch) => {
  axios
    .get(``)
    .then((response) => {
      console.log(`stockList reducer THEN`);
      dispatch(getStockList(response.data));
    })
    .catch((error) => {
      console.log(`stockList reducer CATCH`);
    });
};

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

  const linktoDetail = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
      <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)} />
      <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)} />
    </>
  );
};

export default StockList;
