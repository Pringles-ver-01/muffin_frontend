import React, {useEffect, useState} from "react";
import Modal from "react-modal";
import "./modal.style.css";
import axios from "axios";

const ModalBuying = (props, {asset, crawledStock}) => {
  const url = "http://localhost:8080/assets/";
  const [stockName] = useState(props.asset.stockName);
  const [symbol] = useState((props.asset.symbol != null) ? props.asset.symbol : props.crawledStock.symbol);
  const [nowPrice] = useState(
    (props.asset.nowPrice != null) ? props.asset.nowPrice : props.crawledStock.now);
  const [shareCount] = useState((props.asset.shareCount != null) ? props.asset.shareCount : 1 );
  const [totalAmount] = useState(props.asset.totalAsset);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [purchasePrice, setPurchasePrice] = useState(nowPrice);
  const [buyCount, setBuyCount] = useState(1);
  const [transactionType] = useState("매수");

  useEffect(() => {
    console.log(totalAmount);
  })

  const decrease = (e) => {
    e.preventDefault();
    if(buyCount > 1) {
      setBuyCount(buyCount - 1);
      setPurchasePrice((buyCount - 1) * nowPrice);
    } else {
      alert('올바른 수량을 입력하세요.');
    }

  };
  const increase = (e) => {
    e.preventDefault();
    let buyAmount = (buyCount + 1) * nowPrice
    if(totalAmount >= buyAmount){
      setBuyCount(buyCount + 1);
      setPurchasePrice((buyCount + 1) * nowPrice);
    }else{
      alert('돈이 부족합니다.');
    }

  };

  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      userId : sessionStorage.getItem("logined_user").userId,
      stockName : stockName,
      symbol : symbol,
      shareCount: buyCount,
      nowPrice: nowPrice,
      purchasePrice: purchasePrice,
      transactionDate : new Date().toLocaleDateString(),
      transactionType : "매수"
    };
    console.log(`~~~~buy~~~~~~~transactionType : ${transactionType}, stockName : ${stockName} ,buyCount : ${buyCount}, purchasePrice : ${purchasePrice}, 거래일 : ${transactionDate}`)
    axios
      .post(url + `buy`, newTransaction)
      .then((response) => {
        console.log(`ModalSelling axios then`);
        setBuyCount(1);
        setPurchasePrice(nowPrice);
        props.isClose(false);
      })
      .catch((error) => {
        console.log(`ModalSelling axios catch`);
        throw error;
      });
  }

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
          매수가
        </span>
        <span className="text_small ">{purchasePrice} 원</span>
        <div className="text_middle_bold">{buyCount} 주</div>
        <div>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={decrease}
          >
            -1
          </button>
          <button
            className="btn btn-default bg-transparent plus_minus_btn btn-rounded btn-raised"
            onClick={increase}
          >
            +1
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
              className="btn btn-default btn-blue btn-rounded"
              onClick={submitTransaction}>
              매수
            </button>
          </td>
        </tr>
      </Modal>
    </>
  );
};

export default ModalBuying;
