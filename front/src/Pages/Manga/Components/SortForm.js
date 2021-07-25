import React, { useContext } from "react";
import { Button } from "antd";
import { MangaContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";
import "./SortForm.css";

const Mangas = () => {
    const { sortType, setSortType, popularManga, setSortedMangas } =
        useContext(MangaContext);

    const sortByID = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.mal_id - b.mal_id;
            } else {
                setSortType("asc");
                return b.mal_id - a.mal_id;
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

    const sortByEpisodes = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.episodes - b.episodes;
            } else {
                setSortType("asc");
                return b.episodes - a.episodes;
            }
        });
        setSortedMangas(sortedList);
    };

    const sortByDate = () => {
        const sortedList = [...popularManga].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return parseInt(a.airing_start) - parseInt(b.airing_start);
            } else {
                setSortType("asc");
                return parseInt(b.airing_start) - parseInt(a.airing_start);
            }
        });
        setSortedMangas(sortedList);
    };

    return (
        <>
            <Button
                onClick={sortByID}
                size="middle"
                className="button-3d"
                style={{
                    marginLeft: "90px",
                    backgroundColor: "#e67e22",
                    boxShadow: "0px 6px 0px #d35400"
                }}
            >
                ID
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
            <Button
                onClick={sortByScore}
                size="middle"
                className="button-3d"
                style={{
                    marginLeft: "50px",
                    backgroundColor: "#e67e22",
                    boxShadow: "0px 6px 0px #d35400"
                }}
            >
                Score
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
            <Button
                onClick={sortByEpisodes}
                size="middle"
                className="button-3d"
                style={{
                    marginLeft: "50px",
                    backgroundColor: "#e67e22",
                    boxShadow: "0px 6px 0px #d35400"
                }}
            >
                NB Episodes
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
                style={{
                    marginLeft: "50px",
                    backgroundColor: "#e67e22",
                    boxShadow: "0px 6px 0px #d35400"
                }}
            >
                Date
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
        </>
    );
};

export default Mangas;
