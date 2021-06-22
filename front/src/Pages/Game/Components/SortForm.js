import React, { useContext } from "react";
import { Button } from "antd";
import { GameContext } from "../Context";
import { SortAscendingOutlined, SortDescendingOutlined } from "@ant-design/icons"


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


    return (
        <>
            <Button
                onClick={sortByGrade}
                size="middle"
                style={{ marginLeft: "50px", color: "greenyellow", backgroundColor: 'black' }}
            >
                Notes
                {sortType === "asc"
                    ? <SortAscendingOutlined />
                    : <SortDescendingOutlined />}
            </Button>
            <Button
                onClick={sortByTime}
                size="middle"
                style={{ marginLeft: "50px", color: "red", backgroundColor: "whitesmoke" }}
            >
                Temps d'une partie
                {sortType === "asc"
                    ? <SortAscendingOutlined />
                    : <SortDescendingOutlined />}
            </Button>
        </>
    );
};

export default Games;
