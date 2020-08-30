import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./totalbudget.style.css";
import { AssetContext } from "../../../../context";

const TotalBudget = (props) => {
  const { asset, setAsset } = useContext(AssetContext);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <>
      <tr>
        <td style={{ paddingRight: "30px" }}>
          <div className="my_totlabudget_title"> 내 자산총액</div>
          <div className="my_totlabudget_money">
            {String(asset[0] && asset[0].totalAsset).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}
            원
          </div>
        </td>
        <td style={{ paddingRight: "30px" }}>
          <div className="my_totlabudget_title">평가 수익률</div>
          <span className="my_totlabudget_money" style={{ color: "#ea5455" }}>
            {asset[0] && asset[0].totalProfitRatio}
          </span>
          <span className="my_totlabudget_money"> %</span>
        </td>
        <td style={{ paddingRight: "30px" }}>
          <div className="my_totlabudget_title">평가 손익</div>
          <span className="my_totlabudget_money" style={{ color: "#ea5455" }}>
            {String(asset[0] && asset[0].totalProfit).replace(
              /\B(?=(\d{3})+(?!\d))/g,
              ","
            )}
          </span>
          <span className="my_totlabudget_money"> 원</span>
        </td>
      </tr>
    </>
  );
};

export default TotalBudget;
