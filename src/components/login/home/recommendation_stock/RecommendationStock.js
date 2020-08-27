import React, {useEffect, useState} from "react";
import "./recommendation_stock.style.css";
import {Link} from "react-router-dom";
import axios from "axios";

const RecommendationStock = () => {

  const [recommend, setRecommended] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/stocks/recomandedStocks`)
      .then((response) => {
        let tmpList =[]
        for(let i=0;i<5;i++){
          tmpList[i]=response.data[i];
        }
        setRecommended(tmpList);
        console.log(response.data);
        console.log(recommend)
      })
      .catch((error) => {
        throw error;
      });
  }, []);


  return <>
        <div className="recommendation_stock_container">
          <div>
            <span className="stock_title_section" style={{"marginRight" : "100px"}}>종목</span>
            <span className="stock_column_section" style={{"marginRight" : "70px"}}>시세</span>
            <span className="stock_column_section" style={{"marginRight" : "70px"}}>전일비</span>
            <span className="stock_column_section">거래량</span>
          </div>
          {recommend[0]&&recommend.map((item) => (
          <div className="stock_detail_section_01">
            <Link to={`/stock/detail/${item.symbol}`}>
              <div className="stock_title_section">{item.stockName}</div>
            </Link>
            <div className="down">
              <div className="stock_column_section">{item.now}</div>
              <div className="stock_column_section">{item.dod}</div>
              <div className="stock_column_section">{item.volume}</div>
            </div>
          </div>))}
        </div>
      </>
};

export default RecommendationStock;
