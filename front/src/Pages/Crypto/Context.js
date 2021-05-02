import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  // useEffect(() => {
  //   axios
  //   .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
  //   .then(({ data }) => {
  //     setCryptos(data);
  //     console.log(data)
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
        const result = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
        setCryptos(result.data)
    }
    fetchData()
}, [])

  const contextValues = {
    cryptos,
    setCryptos
  };

  return <CryptoContext.Provider value={contextValues}>{children}</CryptoContext.Provider>;
};
