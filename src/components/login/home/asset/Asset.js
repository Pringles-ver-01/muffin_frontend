import React, { useContext, useEffect, useState } from "react";
import "./asset.style.css";
import { AssetContext } from "../../../../context";
import axios from "axios";

const Asset = () => {
  const { asset, setAsset } = useContext(AssetContext);
  const [userAsset, setUserAsset] = useState(0);
  const [userProfit, setUserProfit] = useState(0);
  const [userProfitRatio, setUserProfitRatio] = useState(0);
  const [plusOrMinus, setPlusOrMinus] = useState("blue");
  let today = new Date();

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
      .then((response) => {
        setAsset(response.data.holdingCount[0]);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    setUserAsset(asset.totalAsset);
    setUserProfit(asset.totalProfit);
    setUserProfitRatio(asset.totalProfitRatio);
    if (asset.totalProfit >= 0) {
      setPlusOrMinus("red");
    }
  }, [asset]);

  return (
    <div>
      <div className="asset_title_section">
        <div className="my_asset_title"> 내 자산총액</div>
        <div className="today" style={{}}>
          {today.toLocaleString()}
        </div>
      </div>

      <div className="my_money">
        {String(userAsset).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
      </div>
      <div>
        <div className="my_asset_title">
          <span className="won, my_asset_title">평가 수익률 : </span>
          <span className="won, my_money">
            <span className={plusOrMinus}>
              {String(userProfitRatio).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} %
            </span>
          </span>
        </div>

        <div className="my_asset_title">
          <span className="won, my_asset_title">평가 손익 : </span>
          <span className="won, my_money">
            <span className={plusOrMinus}>
              {String(userProfit).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Asset;
