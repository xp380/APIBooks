import React, { useContext } from "react";
import { Button } from "antd";
import { CryptoContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";
import "./SortForm.css";

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

    const price = {
        marginLeft: "80px",
        color: "wheat",
        backgroundColor: "darkslateblue",
        fontWeight: "bold",
        boxShadow: "0px 6px 0px #d35400"
    };

    const volume = {
        marginLeft: "50px",
        color: "black",
        backgroundColor: "tomato",
        fontWeight: "bold",
        boxShadow: "0px 6px 0px #d35400"
    };

    const rank = {
        marginLeft: "50px",
        color: "whitesmoke",
        backgroundColor: "goldenrod",
        fontWeight: "bold",
        boxShadow: "0px 6px 0px #d35400"
    };

    const date = {
        marginLeft: "50px",
        color: "black",
        backgroundColor: "yellow",
        fontWeight: "bold",
        boxShadow: "0px 6px 0px #d35400"
    };
    return (
        <>
            <div>
                <Button
                    onClick={sortByPrice}
                    size="middle"
                    className="button-3d"
                    style={price}
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
                    className="button-3d"
                    style={volume}
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
                    className="button-3d"
                    style={rank}
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
                    className="button-3d"
                    style={date}
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
