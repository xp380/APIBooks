import React, { useContext } from "react";
import { Button } from "antd";
import { GameContext } from "../Context";

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
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par Métacritique croissantes"
                    : "Trier par Métacritique décroissantes"}
            </Button>
            <Button
                onClick={sortByTime}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par temps de partie croissante"
                    : "Trier par temps de partie décroissantes"}
            </Button>
        </>
    );
};

export default Games;
