import React, { useState, useEffect } from "react";
import { ModalBuying, ModalSelling } from "../../items";
import "./holdingShares.style.css";
import axios from "axios";

const HoldingShares = ({asset,setHolding}) => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  const [bill, setBill] = useState({});

  // const [noneHolding, setNoneHolding] = useState(0);
  useEffect(()=>{
    let check = typeof asset
    console.log("컴포넌트 렌더링" + check);
    console.log(asset);
  },[asset])
  return (
    <>
      <table className="w-full_holding">
        <tr>
          <td>
            <div>
              {asset[0] &&
              asset.map((assetOne, i)=>(
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col">
                      <tr className="tr_height_title">
                        <td style={{ "min-width": "200px" }}>
                          <span className="shares_title">{assetOne.stockName}</span>
                          <span
                            className="text-sm"
                            style={{
                              "margin-left": "20px",
                              verticalAlign: "bottom",
                            }}
                          >
                        {assetOne.symbol}
                      </span>
                        </td>
                        <td className="btn_section">
                          <button
                            className="btn btn-default btn-blue text-white btn-rounded"
                            onClick={e =>{
                              e.preventDefault();
                              setBill(assetOne);
                              setBuyOpen(true);}}
                          >
                            매수
                          </button>
                          <button
                            className="btn btn-default btn-red text-white btn-rounded"
                            onClick={e => {
                              e.preventDefault();
                              setBill(assetOne);
                              setSellOpen(true);}}>
                            매도
                          </button>
                        </td>
                      </tr>
                      <tr className="tr_height">
                        <td style={{ width: "200px" }}>
                          <span className="td_margin">잔고</span>
                          <span className="td_won_font">
                        {assetOne.shareCount}주
                      </span>
                        </td>
                        <td style={{ "min-width": "200px" }}>
                          <span className="td_margin">손익</span>
                          <span className="td_won_font">{assetOne.profitLoss} 원</span>
                        </td>
                      </tr>
                      <tr className="tr_height">
                        <td style={{ "min-width": "200px" }}>
                          <span className="td_margin_2">평가 금액</span>
                          <span className="td_won_font">{assetOne.evaluatedSum} 원</span>
                        </td>
                        <td style={{ "min-width": "200px" }}>
                          <span className="td_margin_3">수익률</span>
                          <span className="td_won_font">{assetOne.profitRatio} %</span>
                        </td>
                      </tr>
                      <tr className="tr_height">
                        <td style={{ "min-width": "200px" }}>
                          <span className="td_margin_3">매입가</span>
                          <span className="td_won_font">
                        {assetOne.purchasePrice} 원
                      </span>
                        </td>
                        <td style={{ "min-width": "200px" }}>
                          <span className="td_margin_3">현재가</span>
                          <span className="td_won_font">{assetOne.nowPrice} 원</span>
                        </td>
                      </tr>
                    </div>
                  </div>
                ))
              }

            </div>
          </td>
        </tr>
      </table>
      {buyOpen &&
        <ModalBuying asset={bill} isOpen={buyOpen} isClose={() => setBuyOpen(false)} ariaHideApp={false} />}
      {sellOpen &&
        <ModalSelling asset={bill} isOpen={sellOpen} isClose={() => setSellOpen(false)} ariaHideApp={false}/>}

    </>
  );
};

export default HoldingShares;

