import React, { useContext } from "react";
import { Button } from "antd";
import { MangaContext } from "../Context";

const Mangas = () => {
    const { sortType, setSortType, popularManga, setSortedMangas } =
        useContext(MangaContext);

    const sortByMembers = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.members - b.members;
            } else {
                setSortType("asc");
                return b.members - a.members;
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
                onClick={sortByMembers}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par membres croissantes"
                    : "Trier par membres décroissantes"}
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
