import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./budgetHistory.style.css";
import axios from "axios";


const BudgetHistory = () => {
  const [transacInfo, setTransacInfo] = useState([{
    "transactionDate" : "",
    "stockName" : "",
    "transactionType" : false,
    "purchasePrice" : 0,
    "totalAsset" : 0
  }]);

  const linktoDetail = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/`)
      .then(( response ) => {
        console.log(`BudgetHistory useEffect then`);
        setTransacInfo(response.data)
      })
      .catch((error) => {
        console.log(`BudgetHistory useEffect err`);
        throw error;
      });
  }, []);

  return (
    <>
      <table className="w-full table">
        <thead>
        <tr>
          <th>거래날짜</th>
          <th>종목</th>
          <th>거래 종류</th>
          <th>금액</th>
          <th>잔액</th>
        </tr>
        </thead>
        <tbody>
        {transacInfo.map((item) => (
          <tr onClick={linktoDetail}>
            <td>{item.transactionDate}</td>
            <td>{item.stockName}</td>
            <td>{item.transactionType}</td>
            <td>{item.purchasePrice}</td>
            <td>{item.totalAsset}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="pagination_history_div">
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
    </>
  );
};

export default BudgetHistory;
