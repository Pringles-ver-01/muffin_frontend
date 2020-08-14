import React, { useState, useEffect } from "react";
import ModalBuying from "../../../items/ModalBuying";
import ModalSelling from "../../../items/ModalSelling";
import "./holdingShares.style.css";
import axios from "axios";

const HoldingShares = () => {
  const [buyOpen, setBuyOpen] = useState(false);
  const [sellOpen, setSellOpen] = useState(false);

  let holdingShares = [];

  /* useEffect(() => {
    holdingShares = [];
    axios
      .get(`http://localhost:8080/`)
      .then((response) => {
        console.log(`{response}  : HoldingShares java useEffect then`);
        response.data.map((element) => {
          holdingShares.push(element);
        });
      })
      .catch((error) => {
        console.log(`HoldingShares useEffect catch`);
        throw error;
      });
  }, [holdingShares]);

  useEffect(() => {
    axios.get(`http://localhost:8080/python`).then((response) => {
      console.log(`HoldingShares python useEffect then`);
      //response.data.nowPrice
    });
  }); */

  return (
    <>
      <table className="w-full_holding">
        <tr>
          <td>
            <div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                  <tr className="tr_height_title">
                    <td style={{ "min-width": "200px" }}>
                      <span className="shares_title">삼성전자</span>
                      <span
                        className="text-sm"
                        style={{
                          "margin-left": "20px",
                          verticalAlign: "bottom",
                        }}
                      >
                        003248
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
                      <span className="td_won_font">32주</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin">손익</span>
                      <span className="td_won_font">2389238 원</span>
                    </td>
                  </tr>
                  <tr className="tr_height">
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_2">평가 금액</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">수익률</span>
                      <span className="td_won_font">32.59%</span>
                    </td>
                  </tr>
                  <tr className="tr_height">
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">매입가</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                    <td style={{ "min-width": "200px" }}>
                      <span className="td_margin_3">현재가</span>
                      <span className="td_won_font">123,320원</span>
                    </td>
                  </tr>
                </div>
              </div>
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
