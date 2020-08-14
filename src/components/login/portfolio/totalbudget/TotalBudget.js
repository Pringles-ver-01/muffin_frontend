import React, { useState } from "react";
import Modal from "react-modal";
import "./totalbudget.style.css";

const TotalBudget = () => {
  //branch test
  return (
    <>
      <div>
        <div className="totalbudget_section">
          <div>
            <div className="my_totlabudget_title"> 내 자산총액</div>
            <div className="my_totlabudget_money">10,000,000원</div>
          </div>
          <div className="my_rate">
            <div className="money">
              <span>평가 수익률</span>
              <span> : 0.00%</span>
            </div>

            <div className="money">
              <span>평가 손익</span>
              <span className="won"> : 0원</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalBudget;
