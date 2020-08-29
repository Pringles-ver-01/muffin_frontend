import React, {useEffect, useState, useContext} from "react";
import { CandleChart, StockDetail } from "../index";
import Navbar from "../../logined_navbar/Navbar";
import Menu from "../../menu/Menu";
import axios from "axios";
import {AssetContext} from "../../../../context";

const StockPage = ({props, match}) => {
  const { asset, setAsset } = useContext(AssetContext);
  const [stockDetail, setStockDetail] = useState({});


  useEffect(() => {
<<<<<<< HEAD
    axios.get(`http://localhost:8080/stocks/${match.params.symbol}`)
      .then(response => {
        setStockDetail(response.data)
=======
    axios
      .get(`http://localhost:8080/stocks/${match.params.symbol}`)
      .then((response) => {
        setStockDetail(response.data);
>>>>>>> master
      })
      .catch(error => {
        throw error
      })
  },[])

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`http://localhost:8080/assets/holdingCount/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`)
=======
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
>>>>>>> master
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
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
            <StockDetail stockDetail={stockDetail} asset={asset} setAsset={setAsset}/>
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
