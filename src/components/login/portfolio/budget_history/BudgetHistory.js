import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./budgetHistory.style.css";
import axios from "axios";


const BudgetHistory = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [list, setList] = useState([]);
  let transactionDetail = [];
=======
  const [transacInfo, setTransacInfo] = useState([{
    "transactionDate" : "",
    "stockName" : "",
    "transactionType" : false,
    "purchasePrice" : 0,
    "totalAsset" : 0
  }]);
>>>>>>> yerimm
=======
  const [list, setList] = useState([]);
  let transactionDetail = [];
>>>>>>> yoonjung

  const linktoDetail = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> yoonjung
    transactionDetail = [];
    axios
      .get(`http://localhost:8080/`)
      .then(({ response }) => {
        console.log(`BudgetHistory useEffect then`);
        response.list.map((elem) => {
          //java에서 어떤 형식으로 response를 넘길지..
          transactionDetail.push(elem);
        });
<<<<<<< HEAD
      } )
=======
    axios
      .get(`http://localhost:8080/assets/transactionlog`)
      .then(( response ) => {
        setTransacInfo(response.data)
      })
>>>>>>> yerimm
=======
      })
>>>>>>> yoonjung
      .catch((error) => {
        console.log(`BudgetHistory useEffect err`);
        throw error;
      });
<<<<<<< HEAD
<<<<<<< HEAD
  }, [transactionDetail]);
=======
  }, []);
>>>>>>> yerimm
=======
  }, [transactionDetail]);
>>>>>>> yoonjung

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> yoonjung
          {transactionDetail.map((item) => (
            <tr onClick={linktoDetail}>
              <td>{item.transactionDate}</td>
              <td>{item.stockName}</td>
              <td>{item.transactionType}</td>
              <td>{item.profitLoss}</td>
              <td>{item.totalAsset}</td>
            </tr>
          ))}
=======
        {transacInfo.map((item) => (
          <tr onClick={linktoDetail}>
            <td>{item.transactionDate}</td>
            <td>{item.stockName}</td>
            <td>{item.transactionType}</td>
            <td>{item.purchasePrice}</td>
            <td>{item.totalAsset}</td>
          </tr>
        ))}
>>>>>>> yerimm
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
