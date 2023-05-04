import React, { useEffect, useState } from "react";
import "./home.css";
import Modal from "./component/Modal";
import { CryptoState } from "./context/CryptoContext";
import { AiOutlineCaretDown } from "react-icons/ai";
import cryptoImg from "./assets/ethLogo.png";

const Home = () => {
  const { selectedCoin, setSelectedCoin } = CryptoState();
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0.00);
  const [estimated, setEstimated] = useState(0);

  useEffect(() => {
    if (amount === 0 || selectedCoin.current_price === 0) return;
    setEstimated(amount / selectedCoin.current_price);
  }, [amount, selectedCoin.current_price]);
  return (
    <div className="containerhome">
      <div className="form-container">
        <span className="circle">
          {!selectedCoin.image ? (
            <img src={cryptoImg} alt="" />
          ) : (
            <img src={selectedCoin.image} alt="" />
          )}
          
        </span>
        <div className="top-values">
          <p style={{ color: "#C5C5C5" }}>current value</p>
          <h2 style={{ color: "#627EEA" }}>
            ₹ {!selectedCoin.current_price ? "0" : selectedCoin.current_price}
          </h2>
        </div>
        <div className="crypto" onClick={() => setShow((s) => !s)}>
          <div className="crypto-text">
            {!selectedCoin.image ? (
              <img src={cryptoImg} alt="" />
            ) : (
              <img src={selectedCoin.image} alt="" />
            )}
            <p>{!selectedCoin.name ? "Eth" : selectedCoin.name}</p>
          </div>
          <div className="icon">
            <AiOutlineCaretDown style={{ color: "#627EEA" }} />
          </div>
        </div>
        <p
          style={{
            color: "#C5C5C5",
            marginBottom: "2px",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          Amount you want to invest
        </p>
        <p className="curr">INR</p>
        <input
          type="text"
          autoComplete="off"
          className="inputFirst"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p
          style={{
            color: "#C5C5C5",
            marginBottom: "2px",
            fontFamily: "Poppins",
            fontWeight: "400",
          }}
        >
          Estimate Number of {selectedCoin.sym} You will Get
        </p>
        {/* <input type="text" value={estimated} /> */}
        <div style={{ color: "#fffff" }} className="crypto">
          {estimated}
        </div>
        <button className="formBtn">
          Buy
        </button>
      </div>
      <Modal show={show} closeModal={() => setShow(false)} />
    </div>
  );
};

export default Home;
