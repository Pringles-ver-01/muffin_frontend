<<<<<<< HEAD
import React, {useContext, useEffect, useState} from "react";
import Modal from "react-modal";
import "./modal.style.css";
import axios from "axios";
import {AssetContext} from "../../../context";
=======
import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import "./modal.style.css";
import axios from "axios";
import { AssetContext } from "../../../context";
>>>>>>> master

const ModalBuying = (props) => {
  const url = "http://localhost:8080/assets/";
  const { asset, setAsset } = useContext(AssetContext);
  const [assetId, setAssetId] = useState(props.ownedAsset.assetId);
  const [stockId, setStockId] = useState(props.ownedAsset.stockId);
<<<<<<< HEAD
  const [stockName] = useState((props.ownedAsset.stockName != null) ? props.ownedAsset.stockName : props.stockOne.stockName);
  const [symbol] = useState((props.ownedAsset.symbol != null) ? props.ownedAsset.symbol : props.stockOne.symbol);
  const [nowPrice] = useState(parseInt((props.ownedAsset.nowPrice != null) ? (props.ownedAsset.nowPrice) : (props.stockOne.now).replace(',','')));
  const [shareCount, setShareCount] = useState((props.ownedAsset.shareCount != null) ? props.ownedAsset.shareCount : 1 );
=======
  const [stockName] = useState(
    props.ownedAsset.stockName != null
      ? props.ownedAsset.stockName
      : props.stockOne.stockName
  );
  const [symbol] = useState(
    props.ownedAsset.symbol != null
      ? props.ownedAsset.symbol
      : props.stockOne.symbol
  );
  const [nowPrice] = useState(
    parseInt(
      props.ownedAsset.nowPrice != null
        ? props.ownedAsset.nowPrice
        : props.stockOne.now.replace(",", "")
    )
  );
  const [shareCount, setShareCount] = useState(
    props.ownedAsset.shareCount != null ? props.ownedAsset.shareCount : 1
  );
>>>>>>> master
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [purchasePrice, setPurchasePrice] = useState(nowPrice);
  const [transactionType] = useState("매수");
  const [matchedUserStock, setMatechedUserStock] = useState({});
  const [matchedUserStockId, setMatechedUserStockId] = useState({});
  const [matchedAssetId, setMatechedAssetId] = useState({});
<<<<<<< HEAD
  const [totalAmount,setTotalAmount] = useState((props.ownedAsset.totalAmount != null) ? props.ownedAsset.totalAmount : props.stockOne.totalAmount);
  const [buyCount, setBuyCount] = useState(1);


  // assetId mount
  useEffect(()=>{
=======
  const [totalAmount, setTotalAmount] = useState(
    props.ownedAsset.totalAmount != null
      ? props.ownedAsset.totalAmount
      : props.stockOne.totalAmount
  );
  const [buyCount, setBuyCount] = useState(1);

  // assetId mount
  useEffect(() => {
>>>>>>> master
    for (let i = 0; i < asset.length; i++) {
      if (asset[i].stockName === props.stockOne.stockName) {
        setMatechedAssetId(asset[i]);
        setAssetId(matchedAssetId.assetId);
<<<<<<< HEAD
        console.log('/////////');
      }
    }
  },[matchedAssetId])

  // stockId mount
  useEffect(()=>{
=======
        console.log("/////////");
      }
    }
  }, [matchedAssetId]);

  // stockId mount
  useEffect(() => {
>>>>>>> master
    for (let i = 0; i < asset.length; i++) {
      if (asset[i].stockName === props.stockOne.stockName) {
        setMatechedUserStockId(asset[i]);
        setStockId(matchedUserStockId.stockId);
<<<<<<< HEAD
        console.log('-------');
      }
    }
  },[matchedUserStockId])



  // 총 자산 mount
  useEffect(()=>{
    // if(asset[0])console.log(totalAmount);
    setMatechedUserStock(asset[0]);
    setTotalAmount(matchedUserStock.totalAsset);
  },[matchedUserStock])

  useEffect(()=>{
    setTotalAmount(matchedUserStock.totalAsset);
  },[matchedUserStock])

=======
        console.log("-------");
      }
    }
  }, [matchedUserStockId]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/assets/holdingCount/${
          JSON.parse(sessionStorage.getItem("logined_user")).userId
        }`
      )
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  // 총 자산 mount
  useEffect(() => {
    // if(asset[0])console.log(totalAmount);
    setMatechedUserStock(asset[0]);
    setTotalAmount(matchedUserStock.totalAsset);
  }, [matchedUserStock]);

  useEffect(() => {
    setTotalAmount(matchedUserStock.totalAsset);
  }, [matchedUserStock]);
>>>>>>> master

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
    let buyAmount = (buyCount + 1) * nowPrice;
    if(totalAmount >= buyAmount){
      setBuyCount(buyCount + 1);
      setPurchasePrice((buyCount + 1) * nowPrice);
    }else{
      alert('돈이 부족합니다.');
    }
  }

<<<<<<< HEAD
  useEffect(() => {
    axios
      .get(`http://localhost:8080/assets/holdingCount/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`)
      .then((response) => {
        setAsset(response.data.holdingCount);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  const submitTransaction = (e) => {
    e.preventDefault();
    if(props.stockOne.stockName != null) {
      const newTransaction = {
        userId : JSON.parse(sessionStorage.getItem("logined_user")).userId,
        assetId : assetId,
        stockId : stockId,
        stockName : stockName,
        symbol : symbol,
        shareCount: buyCount,
        nowPrice: nowPrice,
        purchasePrice: purchasePrice,
        transactionDate : new Date().toLocaleDateString(),
        transactionType : transactionType
      };
      axios
        .post(url + `newStock/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`, newTransaction)
=======
  const submitTransaction = (e) => {
    e.preventDefault();
    if (props.stockOne.stockName != null) {
      const newTransaction = {
        userId: JSON.parse(sessionStorage.getItem("logined_user")).userId,
        assetId: assetId,
        stockId: stockId,
        stockName: stockName,
        symbol: symbol,
        shareCount: buyCount,
        nowPrice: nowPrice,
        purchasePrice: purchasePrice,
        transactionDate: new Date().toLocaleDateString(),
        transactionType: transactionType,
      };
      console.log(newTransaction.stockName);
      axios
        .post(
          url +
            `newStock/${
              JSON.parse(sessionStorage.getItem("logined_user")).userId
            }`,
          newTransaction
        )
>>>>>>> master
        .then((response) => {
          setAsset(response.data);
          setBuyCount(1);
          setPurchasePrice(nowPrice);
<<<<<<< HEAD
=======
          alert("매수가 완료되었습니다.");
>>>>>>> master
          props.isClose(false);
        })
        .catch((error) => {
          throw error;
        });
    } else {
      const addTransaction = {
<<<<<<< HEAD
        userId : JSON.parse(sessionStorage.getItem("logined_user")).userId,
        assetId : assetId,
        stockId : stockId,
        stockName : stockName,
        symbol : symbol,
        shareCount: buyCount,
        nowPrice: nowPrice,
        purchasePrice: purchasePrice,
        transactionDate : new Date().toLocaleDateString(),
        transactionType : transactionType
      };
      axios
        .post(url + `ownedStock/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`, addTransaction)
=======
        userId: JSON.parse(sessionStorage.getItem("logined_user")).userId,
        assetId: assetId,
        stockId: stockId,
        stockName: stockName,
        symbol: symbol,
        shareCount: buyCount,
        nowPrice: nowPrice,
        purchasePrice: purchasePrice,
        transactionDate: new Date().toLocaleDateString(),
        transactionType: transactionType,
      };
      axios
        .post(
          url +
            `ownedStock/${
              JSON.parse(sessionStorage.getItem("logined_user")).userId
            }`,
          addTransaction
        )
>>>>>>> master
        .then((response) => {
          setAsset(response.data);
          setBuyCount(1);
          setPurchasePrice(nowPrice);
<<<<<<< HEAD
=======
          alert("매수가 완료되었습니다.");
>>>>>>> master
          props.isClose(false);
        })
        .catch((error) => {
          throw error;
        });
    }
<<<<<<< HEAD

  }
=======
  };
>>>>>>> master

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
<<<<<<< HEAD
        <span className="text_small" style={{ "marginRight": "8px" }}>
          현재가
        </span>
        <span className="text_small ">{nowPrice} 원</span> <br />
        <span className="text_small" style={{ "marginRight": "8px" }}>
=======
        <span className="text_small" style={{ marginRight: "8px" }}>
          현재가
        </span>
        <span className="text_small ">
          {String(nowPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
        </span>{" "}
        <br />
        <span className="text_small" style={{ marginRight: "8px" }}>
>>>>>>> master
          매수가
        </span>
        <span className="text_small ">
          {String(purchasePrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
        </span>
        <div className="text_middle_bold">
          {String(buyCount).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 주
        </div>
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
