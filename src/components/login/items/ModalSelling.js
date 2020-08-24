import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./modal.style.css";

const ModalSelling = (props, { asset, crawledStock, isClose }) => {
  const url = "http://localhost:8080/assets/";
  const [stockName, setStockName] = useState(props.asset.stockName);
  const [symbol, setSymbol] = useState(
    props.asset.symbol != null ? props.asset.symbol : props.crawledStock.symbol
  );
  const [nowPrice, setNowPrice] = useState(
    props.asset.nowPrice != null ? props.asset.nowPrice : props.crawledStock.now
  );
  const [shareCount, setShareCount] = useState(
    props.asset.shareCount != null ? props.asset.shareCount : 1
  );
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [purchasePrice, setPurchasePrice] = useState(nowPrice);
  const [sellCount, setSellCount] = useState(1);
  const [transactionType, setTransactionType] = useState("매도");

  const decrease = (e) => {
    e.preventDefault();
    if (sellCount > 1) {
      setSellCount(sellCount - 1);
      setPurchasePrice((sellCount - 1) * nowPrice);
    } else {
      alert("올바른 수량을 입력하세요.");
    }
  };
  const increase = (e) => {
    e.preventDefault();
    if (shareCount > sellCount) {
      setSellCount(sellCount + 1);
      setPurchasePrice((sellCount + 1) * nowPrice);
    } else {
      alert("올바른 수량을 입력하세요.");
    }
  };

  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      // userId : sessionStorage.getItem("logined_user").userId,
      stockName: stockName,
      symbol: symbol,
      shareCount: sellCount,
      nowPrice: nowPrice,
      purchasePrice: purchasePrice,
      transactionDate: new Date().toLocaleDateString(),
      transactionType: transactionType,
    };
    axios
      .post(url + `sell`, newTransaction)
      .then((response) => {
        console.log(newTransaction);
        setShareCount(1);
        setPurchasePrice(nowPrice);
        props.isClose(false);
      })
      .catch((error) => {
        throw error;
      });
  };

  const modalStyle = {
    content: {
      width: "300px",
      height: "400px",
    },
  };
  return (
    <>
      <Modal {...props} style={modalStyle}>
        <span className="text_small ">{stockName}</span> <br />
        <span className="text_small" style={{ "margin-right": "8px" }}>
          현재가
        </span>
        <span className="text_small ">{nowPrice} 원</span> <br />
        <span className="text_small" style={{ "margin-right": "8px" }}>
          매도가
        </span>
        <span className="text_small ">{purchasePrice} 원</span>
        <h1>{sellCount} 주</h1>
        <div>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={decrease}
          >
            {" "}
            -1{" "}
          </button>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={increase}
          >
            {" "}
            +1{" "}
          </button>
        </div>
        <tr>
          <td>
            <button
              className="btn btn-default btn-gray btn-rounded"
              onClick={() => props.isClose()}
            >
              취소
            </button>
          </td>
          <td>
            <button
              className="btn btn-default btn-red btn-rounded"
              onClick={submitTransaction}
            >
              매도
            </button>
          </td>
        </tr>
      </Modal>
    </>
  );
};

export default ModalSelling;
