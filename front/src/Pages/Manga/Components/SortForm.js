import React, { useContext } from "react";
import { Button } from "antd";
import { MangaContext } from "../Context";

const Mangas = () => {
    const { sortType, setSortType, popularManga, setSortedMangas } =
        useContext(MangaContext);

    const sortByRank = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.rank - b.rank;
            } else {
                setSortType("asc");
                return b.rank - a.rank;
            }
        });
        setSortedMangas(sortedList);
    };
    const sortByScore = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.score - b.score;
            } else {
                setSortType("asc");
                return b.score - a.score;
            }
        });
        setSortedMangas(sortedList);
    };

    return (
        <>
            <Button
                onClick={sortByRank}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par rank croissantes"
                    : "Trier par rank décroissantes"}
            </Button>
            <Button
                onClick={sortByScore}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par score croissante"
                    : "Trier par score décroissantes"}
            </Button>
        </>
    );
};

export default Mangas;
