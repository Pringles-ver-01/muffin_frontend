import React, { useState, useEffect } from "react";
import { ModalBuying, ModalSelling } from "../../items";
import "./holdingShares.style.css";
import axios from "axios";

const HoldingShares = ({holding,setHolding}) => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);
  // const [noneHolding, setNoneHolding] = useState(0);

  return (
    <>
      <table className="w-full_holding">
        <tr>
          <td>
            <div>
                {holding.map((holding, i)=>(
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-col">
                        <tr className="tr_height_title">
                          <td style={{ "min-width": "200px" }}>
                            <span className="shares_title">{holding.stockName}</span>
                            <span
                              className="text-sm"
                              style={{
                                "margin-left": "20px",
                                verticalAlign: "bottom",
                              }}
                            >
                        {holding.symbol}
                      </span>
                          </td>
                          <td className="btn_section">
                            <button
                              className="btn btn-default btn-blue text-white btn-rounded"
                              onClick={() => setBuyOpen(true)}
                            >
                              매수
                            </button>
                            <button
                              className="btn btn-default btn-red text-white btn-rounded"
                              onClick={() => setSellOpen(true)}
                            >
                              매도
                            </button>
                          </td>
                        </tr>
                        <tr className="tr_height">
                          <td style={{ width: "200px" }}>
                            <span className="td_margin">잔고</span>
                            <span className="td_won_font">
                        {holding.shareCount}주
                      </span>
                          </td>
                          <td style={{ "min-width": "200px" }}>
                            <span className="td_margin">손익</span>
                            <span className="td_won_font">{holding.profitLoss} 원</span>
                          </td>
                        </tr>
                        <tr className="tr_height">
                          <td style={{ "min-width": "200px" }}>
                            <span className="td_margin_2">평가 금액</span>
                            <span className="td_won_font">{holding.evaluatedSum} 원</span>
                          </td>
                          <td style={{ "min-width": "200px" }}>
                            <span className="td_margin_3">수익률</span>
                            <span className="td_won_font">{holding.profitRatio} %</span>
                          </td>
                        </tr>
                        <tr className="tr_height">
                          <td style={{ "min-width": "200px" }}>
                            <span className="td_margin_3">매입가</span>
                            <span className="td_won_font">
                        {holding.purchasePrice} 원
                      </span>
                          </td>
                          <td style={{ "min-width": "200px" }}>
                            <span className="td_margin_3">현재가</span>
                            <span className="td_won_font">{holding.nowPrice} 원</span>
                          </td>
                        </tr>
                      </div>
                    </div>
                  ))}
            </div>
          </td>
        </tr>
      </table>
      <ModalBuying isOpen={buyOpen} isClose={() => setBuyOpen(false)} />
      <ModalSelling isOpen={sellOpen} isClose={() => setSellOpen(false)} />
    </>
  );
};

export default HoldingShares;

export const haveNone = () => {
  return <>
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <tr className="tr_height_title">
          <td style={{ "min-width": "200px" }}>
            <div>보유하고 있는 주식이 없습니다</div>
          </td>
        </tr>
      </div>
    </div>
  </>
}
