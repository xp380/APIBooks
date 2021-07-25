import React, { useContext } from "react";
import { Button } from "antd";
import { CovidContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";
import "./SortForm.css";

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
                    className="button-3d"
                    style={{
                        marginLeft: "80px",
                        color: "cornflowerblue",
                        backgroundColor: "darkblue",
                        boxShadow: "0px 6px 0px #d35400"
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
                    className="button-3d"
                    style={{
                        marginLeft: "50px",
                        color: "floralwhite",
                        backgroundColor: "darkorange",
                        boxShadow: "0px 6px 0px #d35400"
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
                    className="button-3d"
                    style={{
                        marginLeft: "50px",
                        color: "black",
                        backgroundColor: "greenyellow",
                        boxShadow: "0px 6px 0px #d35400"
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
