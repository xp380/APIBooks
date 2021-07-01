import React, { useContext } from "react";
import { Button } from "antd";
import { CovidContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";

const Covids = () => {
    const { sortType, setSortType, covidData, setSortedCovid } =
        useContext(CovidContext);

    const sortByDeaths = () => {
        const sortedList = [...covidData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.Deaths - b.Deaths;
            } else {
                setSortType("asc");
                return b.Deaths - a.Deaths;
            }
        });
        setSortedCovid(sortedList);
    };
    const sortByRecovered = () => {
        const sortedList = [...covidData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.Recovered - b.Recovered;
            } else {
                setSortType("asc");
                return b.Recovered - a.Recovered;
            }
        });
        setSortedCovid(sortedList);
    };

    const sortByConfirmed = () => {
        const sortedList = [...covidData].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.Confirmed - b.Confirmed;
            } else {
                setSortType("asc");
                return b.Confirmed - a.Confirmed;
            }
        });
        setSortedCovid(sortedList);
    };
    return (
        <>
            <div>
                <Button
                    onClick={sortByDeaths}
                    size="middle"
                    style={{
                        marginLeft: "80px",
                        color: "cornflowerblue",
                        backgroundColor: "darkblue"
                    }}
                >
                    Morts
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByRecovered}
                    size="middle"
                    style={{
                        marginLeft: "50px",
                        color: "floralwhite",
                        backgroundColor: "darkorange"
                    }}
                >
                    Rétablis
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByConfirmed}
                    size="middle"
                    style={{
                        marginLeft: "50px",
                        color: "black",
                        backgroundColor: "greenyellow"
                    }}
                >
                    Confirmés
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

export default Covids;
