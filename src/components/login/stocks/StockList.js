import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./stockList.css";
import { ModalBuying, ModalSelling }from "../items";


const StockList = () => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  const [stockList, setStockList] = useState([{
    "now": "",
    "dod": "",
    "dodRatio": "",
    "transacAmount": "",
    "volume": ""
  }])

  useEffect(() => {
    axios
      .get(`http://localhost:8080/stocks/marketprices`)
      .then((response) => {
        console.log(`StockList useEffect then ${JSON.stringify(response.data)}`);
        setStockList(response.data)
      })
      .catch((error) => {
        console.log(`Stocklist useEffect catch from python`);
        throw error;
      });
  }, []);

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
              <th>시가 총액</th>
              <th>거래량</th>
              <th>거래하기</th>
            </tr>
            </thead>
            <tbody>
            {stockList.map((item) => (
              <tr onClick={linktoDetail}>
                <td>
                  <Link to="stock/detail">{item.now}</Link>
                </td>
                <td>{item.now}</td>
                <td>{item.dod}</td>
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
      <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)}/>
      <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)}/>
    </>
  );
};

export default StockList;
