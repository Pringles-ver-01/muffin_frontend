import React, {useEffect, useState} from "react";
import { CandleChart, StockDetail } from "../index";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";
import axios from "axios";

const StockPage = ({props, match}) => {
  const [stockDetail, setStockDetail] = useState({});


  useEffect(() => {
    axios.get(`http://localhost:8080/stocks/${match.params.symbol}`)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setStockDetail(response.data)
      })
      .catch(error => {
        throw error
      })
  },[])


  return (
    <>
      <Navbar />
      <div className="content-container">
        <div className="wrapper">
          <Menu />
          <div style={{ width: "1100px" }}>
            <StockDetail stockDetail={stockDetail}/>
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
