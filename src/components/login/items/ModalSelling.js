import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./modal.style.css";

// import "./modal.style.css";
/*
const addTransactionAction = (data) => ({
  type: "ADD_TRANSACTION",
  payload: data,
});
export const TransationReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return action.payload;
    default:
      return state;
  }
};*/

const ModalSelling = (props) => {
  const [sellCount, setSellCount] = useState(1);
  const [nowPrice] = useState(12000);
  const [purchasePrice, setPurchasePrice] = useState(nowPrice);

  /*  const dispatch = useDispatch();
  const addTransaction = (newTransaction) =>
    dispatch(addTransactionAction(newTransaction));*/

  const decrease = (e) => {
    e.preventDefault();
    setSellCount(sellCount - 1);
    setPurchasePrice((sellCount - 1) * nowPrice);
  };
  const increase = (e) => {
    e.preventDefault();
    setSellCount(sellCount + 1);
    setPurchasePrice((sellCount + 1) * nowPrice);
  };

  const submitTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      sellCount: sellCount,
      nowPrice: nowPrice,
      purchasePrice: purchasePrice,
    };
    // addTransaction(newTransaction);

    let saveTransaction = () => (dispatch) => {
      axios
        .post(``)
        .then((response) => {
          console.log(`ModalSelling axios then`);
          // dispatch(addTransactionAction(response.data));
        })
        .catch((error) => {
          console.log(`ModalSelling axios catch`);
          throw error;
        });
    };
    setSellCount(1);
    setPurchasePrice(nowPrice);
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
        <span className="text_small ">{props.stockName}</span> <br />
        <span className="text_small" style={{ "margin-right": "8px" }}>
          현재가
        </span>
        <span className="text_small ">{nowPrice} 원</span> <br />
        <span className="text_small" style={{ "margin-right": "8px" }}>
          매입가
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
              onClick={props.isClose}
            >
              취소
            </button>
          </td>
          <td>
            <button
              className="btn btn-default btn-red btn-rounded"
              onClick={props.isClose}
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
