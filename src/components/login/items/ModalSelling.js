import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./modal.style.css";
import { AssetContext } from "../../../context";

const ModalSelling = (props) => {
  const url = "http://localhost:8080/assets/";
  const { asset, setAsset } = useContext(AssetContext);
  const [matchedUserStocks, setMatechedUserStock] = useState({});
  const [matchedUserStockId, setMatechedUserStockId] = useState({});
  const [matchedAssetId, setMatechedAssetId] = useState({});
  const [assetId, setAssetId] = useState(props.ownedAsset.assetId);
  const [stockId, setStockId] = useState(props.ownedAsset.stockId);
  const [stockName, setStockName] = useState(
    props.ownedAsset.stockName != null
      ? props.ownedAsset.stockName
      : props.stockOne.stockName
  );
  const [symbol, setSymbol] = useState(
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
  const [shareCount, setShareCount] = useState(props.ownedAsset.shareCount);
  const [totalAmount, setTotalAmount] = useState(props.ownedAsset.totalAsset);
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [purchasePrice, setPurchasePrice] = useState(nowPrice);
  const [sellCount, setSellCount] = useState(1);
  const [transactionType] = useState("매도");

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

  // assetId mount
  useEffect(() => {
    for (let i = 0; i < asset.length; i++) {
      if (asset[i].stockName === props.stockOne.stockName) {
        setMatechedAssetId(asset[i]);
        setAssetId(matchedAssetId.assetId);
        console.log("/////////");
      }
    }
  }, [matchedAssetId]);

  // stockId mount
  useEffect(() => {
    for (let i = 0; i < asset.length; i++) {
      if (asset[i].stockName === props.stockOne.stockName) {
        setMatechedUserStockId(asset[i]);
        setStockId(matchedUserStockId.stockId);
        console.log("-------");
      }
    }
  }, [matchedUserStockId]);

  // 총 자산 mount
  useEffect(() => {
    for (let i = 0; i < asset.length; i++) {
      if (asset[i].stockName == props.stockOne.stockName) {
        setMatechedUserStock(asset[i]);
        setShareCount(matchedUserStocks.shareCount);
        console.log("/////////");
      }
    }
  }, [matchedUserStocks]);

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
      userId: JSON.parse(sessionStorage.getItem("logined_user")).userId,
      assetId: assetId,
      stockId: stockId,
      stockName: stockName,
      symbol: symbol,
      shareCount: sellCount,
      nowPrice: nowPrice,
      purchasePrice: purchasePrice,
      transactionDate: new Date().toLocaleDateString(),
      transactionType: transactionType,
    };
    console.log(newTransaction);
    axios
      .post(
        url +
          `sell/${JSON.parse(sessionStorage.getItem("logined_user")).userId}`,
        newTransaction
      )
      .then((response) => {
        console.log(newTransaction);
        setAsset(response.data);
        setShareCount(1);
        setPurchasePrice(nowPrice);
        alert("매도가 완료되었습니다.");
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
        <span className="text_small ">
          {String(nowPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
        </span>{" "}
        <br />
        <span className="text_small" style={{ "margin-right": "8px" }}>
          매도가
        </span>
        <span className="text_small ">
          {String(purchasePrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원
        </span>
        <h1>{sellCount} 주</h1>
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
