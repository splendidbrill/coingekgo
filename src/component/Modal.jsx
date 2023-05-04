import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { CoinList } from "../coingecko/coinApi";
import { CryptoState } from "../context/CryptoContext";
import axios from "axios";
import { MdClose } from "react-icons/md";
import debounce from "../helper/debounce";

const Modal = ({ show, closeModal }) => {
  const { selectedCoin, setSelectedCoin } = CryptoState();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const { currency } = CryptoState();

  const fetchCoins = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };
  
  useEffect(() => {
   debounce(fetchCoins(), 500) ;
  }, []);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  if (!show) return null;
  return ReactDOM.createPortal(
    <div className="modalContainer">
      <div className="overlay" onClick={closeModal}></div>
      <div className="contentModal">
        <span id="close" onClick={closeModal}>
          <MdClose className="icon-close" />
        </span>

        <input
          type="text"
          placeholder=" &#128269;  Search chains"
          onChange={(e) => setSearch(e.target.value)}
        />
        {error
          ? { error }
          : handleSearch()
              .slice(0, 6)
              .map((coin) => (
                <div
                  className="coin"
                  key={coin.id}
                  onClick={() => {
                    setSelectedCoin({
                      name: coin.name,
                      current_price: coin.current_price,
                      image: coin.image,
                      sym: coin.symbol,
                    }),
                      closeModal();
                  }}
                >
                  <img
                    style={{ height: "20px", width: "20px" }}
                    src={coin.image}
                    alt=""
                  />
                  <p>{coin.name} </p>
                </div>
              ))}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
