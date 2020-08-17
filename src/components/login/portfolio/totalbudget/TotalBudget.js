import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> yoonjung
import { element } from "prop-types";
import "./totalbudget.style.css";

const TotalBudget = () => {
  let budgetDetail = [];

  useEffect(() => {
    budgetDetail = [];
    axios
      .get(`http://localhost:8080/`)
      .then((response) => {
        console.log(`TotalBudget useEffect then`);
        response.data.map((element) => {
          budgetDetail.push(element);
        });
      })
      .catch((error) => {
        console.log(`TotalBudget useEffect catch`);
        throw error;
      });
  }, [budgetDetail]);
<<<<<<< HEAD
=======
import "./totalbudget.style.css";

const TotalBudget = () => {
  const [asset, setAsset] = useState({
    "totalAsset": 0,
    "earnigsRatio": 0,
    "profitLoss": 0,
  })


  useEffect(() => {
    axios.get(`http://localhost:8080/assets/total`)
      .then((response) => {
        console.log(`${JSON.stringify(response)}`)
        setAsset(response.data)
      })
      .catch((error) => {
        console.log(`TotalBudget useEffect catch`)
        throw error
      })
  },[])
>>>>>>> yerimm
=======
>>>>>>> yoonjung

  return (
    <>
      <div>
        <div className="totalbudget_section">
          <div>
            <div className="my_totlabudget_title"> 내 자산총액</div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="my_totlabudget_money">{budgetDetail}원</div>
=======
            <div className="my_totlabudget_money">{asset.totalAsset}원</div>
>>>>>>> yerimm
=======
            <div className="my_totlabudget_money">{budgetDetail}원</div>
>>>>>>> yoonjung
          </div>
          <div className="my_rate">
            <div className="money">
              <span>평가 수익률</span>
<<<<<<< HEAD
<<<<<<< HEAD
              <span> : {budgetDetail}%</span>
=======
              <span> : {asset.earnigsRatio}%</span>
>>>>>>> yerimm
=======
              <span> : {budgetDetail}%</span>
>>>>>>> yoonjung
            </div>

            <div className="money">
              <span>평가 손익</span>
<<<<<<< HEAD
<<<<<<< HEAD
              <span className="won"> : {budgetDetail}원</span>
=======
              <span className="won"> : {asset.profitLoss}원</span>
>>>>>>> yerimm
=======
              <span className="won"> : {budgetDetail}원</span>
>>>>>>> yoonjung
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalBudget;
