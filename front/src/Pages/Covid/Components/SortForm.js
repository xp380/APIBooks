import React, { useContext } from "react";
import { Button } from "antd";
import { CovidContext } from "../Context";

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

    return (
        <>
            <Button
                onClick={sortByDeaths}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par Morts croissantes"
                    : "Trier par Morts décroissantes"}
            </Button>
            <Button
                onClick={sortByRecovered}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par Rétablis croissantes"
                    : "Trier par Rétablis décroissantes"}
            </Button>
        </>
    );
};

export default Covids;
