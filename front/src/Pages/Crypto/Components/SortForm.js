import React, { useContext } from "react";
import { Button } from "antd";
import { CryptoContext } from "../Context";

const Cryptos = () => {
    const { sortType, setSortType, cryptosData, setSortedCrypto } =
        useContext(CryptoContext);

    const sortByPrice = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.current_price - b.current_price;
            } else {
                setSortType("asc");
                return b.current_price - a.current_price;
            }
        });
        setSortedCrypto(sortedList);
    };
    const sortByVolume = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.total_volume - b.total_volume;
            } else {
                setSortType("asc");
                return b.total_volume - a.total_volume;
            }
        });
        setSortedCrypto(sortedList);
    };

    return (
        <>
            <Button
                onClick={sortByPrice}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par Prix croissantes"
                    : "Trier par Prix décroissantes"}
            </Button>
            <Button
                onClick={sortByVolume}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par Volume croissante"
                    : "Trier par Volume décroissantes"}
            </Button>
        </>
    );
};

export default Cryptos;
