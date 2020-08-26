import React, { useEffect, useState, useContext } from "react";
import { CandleChart, StockDetail } from "../index";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";
import axios from "axios";
import { AssetContext } from "../../../../context";

const StockPage = ({ props, match }) => {
  const { asset, setAsset } = useContext(AssetContext);
  const [stockDetail, setStockDetail] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/stocks/${match.params.symbol}`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setStockDetail(response.data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/assets/holdingCount/1`)
      .then((response) => {
        console.log(
          ` : StockPage java useEffect then --- ${JSON.stringify(
            response.data.holdingCount
          )} `
        );
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        console.log(`-----StockPage useEffect catch-----`);
        throw error;
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div style={{ width: "1100px" }}>
            <StockDetail
              stockDetail={stockDetail}
              asset={asset}
              setAsset={setAsset}
            />
            <div>
              <CandleChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPage;
