import React from "react";
import { CandleChart, StockDetail } from "../index";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";

const StockPage = () => {
  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div style={{ width: "1100px" }}>
            <StockDetail />
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
