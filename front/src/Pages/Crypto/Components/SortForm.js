import React, { useContext } from "react";
import { Button } from "antd";
import { CryptoContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";

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

    const sortByRank = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.market_cap_rank - b.market_cap_rank;
            } else {
                setSortType("asc");
                return b.market_cap_rank - a.market_cap_rank;
            }
        });
        setSortedCrypto(sortedList);
    };

    const sortByDate = () => {
        const sortedList = [...cryptosData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return parseInt(a.atl_date) - parseInt(b.atl_date);
            } else {
                setSortType("asc");
                return parseInt(b.atl_date) - parseInt(a.atl_date);
            }
        });
        setSortedCrypto(sortedList);
    };

    return (
        <>
            <div>
                <Button
                    onClick={sortByPrice}
                    size="middle"
                    style={{
                        marginLeft: "80px",
                        color: "wheat",
                        backgroundColor: "darkslateblue",
                        fontWeight: "bold"
                    }}
                >
                    Prix
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByVolume}
                    size="middle"
                    style={{
                        marginLeft: "50px",
                        color: "black",
                        backgroundColor: "tomato",
                        fontWeight: "bold"
                    }}
                >
                    Volume
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByRank}
                    size="middle"
                    style={{
                        marginLeft: "50px",
                        color: "whitesmoke",
                        backgroundColor: "goldenrod",
                        fontWeight: "bold"
                    }}
                >
                    Rank
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByDate}
                    size="middle"
                    style={{
                        marginLeft: "50px",
                        color: "black",
                        backgroundColor: "yellow",
                        fontWeight: "bold"
                    }}
                >
                    Date D'entrée
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
            </div>
        </>
    );
};

export default Cryptos;
