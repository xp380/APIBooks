import React, { useContext } from "react";
import { Button } from "antd";
import { GameContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";
import "./SortForm.css";

const Games = () => {
    const { sortType, setSortType, popularGame, setSortedGames } =
        useContext(GameContext);

    const sortByGrade = () => {
        const sortedList = [...popularGame].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.metacritic - b.metacritic;
            } else {
                setSortType("asc");
                return b.metacritic - a.metacritic;
            }
        });
        setSortedGames(sortedList);
    };
    const sortByTime = () => {
        const sortedList = [...popularGame].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.playtime - b.playtime;
            } else {
                setSortType("asc");
                return b.playtime - a.playtime;
            }
        });
        setSortedGames(sortedList);
    };

    const sortByDate = () => {
        const sortedList = [...popularGame].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return parseInt(a.released) - parseInt(b.released);
            } else {
                setSortType("asc");
                return parseInt(b.released) - parseInt(a.released);
            }
        });
        setSortedGames(sortedList);
    };

    const sort = {
        marginLeft: "50px",
        backgroundColor: "#e67e22",
        boxShadow: "0px 6px 0px #d35400"
    };
    const sort2 = {
        marginLeft: "90px",
        backgroundColor: "#e67e22",
        boxShadow: "0px 6px 0px #d35400"
    };
    return (
        <>
            <div>
                <Button
                    onClick={sortByGrade}
                    size="middle"
                    className="button-3d"
                    style={sort2}
                >
                    Notes
                    {sortType === "asc" ? (
                        <SortAscendingOutlined />
                    ) : (
                        <SortDescendingOutlined />
                    )}
                </Button>
                <Button
                    onClick={sortByTime}
                    size="middle"
                    className="button-3d"
                    style={sort}
                >
                    Temps d'une partie
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
                    style={sort}
                >
                    Date
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

export default Games;
