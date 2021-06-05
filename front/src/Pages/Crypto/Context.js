import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [cryptos, setCryptos] = useState([]);
  const [cryptoData, setCryptoData] = useState([])
  const [searchCrypto, setSearchCrypto] = useState('bitcoin')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur")
      setCryptos(result.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const getCryptos = async () => {
      try {
        const response = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${searchCrypto}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        setCryptoData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getCryptos()
  }, [searchCrypto])
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${match.params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const contextValues = {
    cryptos,
    setCryptos,
    setSearchCrypto,
    cryptoData
  };

  return <CryptoContext.Provider value={contextValues}>
    {children}
  </CryptoContext.Provider>;
};
