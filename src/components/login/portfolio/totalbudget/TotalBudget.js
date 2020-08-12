import React, { useState, useEffect } from "react";
import axios from "axios";
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

  return (
    <>
      <div>
        <div className="totalbudget_section">
          <div>
            <div className="my_totlabudget_title"> 내 자산총액</div>
            <div className="my_totlabudget_money">{budgetDetail}원</div>
          </div>
          <div className="my_rate">
            <div className="money">
              <span>평가 수익률</span>
              <span> : {budgetDetail}%</span>
            </div>

            <div className="money">
              <span>평가 손익</span>
              <span className="won"> : {budgetDetail}원</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalBudget;
