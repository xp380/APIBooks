import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [searchCrypto, setSearchCrypto] = useState("bitcoin");
    const [cryptoSearched, setCryptoSearched] = useState([]);

    const [cryptosData, setCryptosData] = useState([]);
    const [sortedCrypto, setSortedCrypto] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");



    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"
            );
            setCryptosData(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filteredList = cryptosData.filter((crypto) =>
            crypto.name.toLowerCase().includes(searchValue)
        );
        setSortedCrypto(filteredList);
    }, [searchValue, cryptosData]);

    useEffect(() => {
        const getCovid = async () => {
            try {
                const response = await axios.get(
                    // https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false
                    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${searchCrypto}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
                );
                setCryptoSearched(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCovid();
    }, [searchCrypto]);

    const contextValues = {
        setSearchCrypto,
        cryptoSearched,
        cryptoData,
        sortedCrypto,
        sortType,
        setSortType,
        setSortedCrypto,
        cryptosData
    };

    return (
        <CryptoContext.Provider value={contextValues}>
            {children}
        </CryptoContext.Provider>
    );
};
