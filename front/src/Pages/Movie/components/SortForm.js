import React, { useContext } from "react";
import { Button } from "antd";
import { MovieContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";

const Movies = () => {
    const { sortType, setSortType, popularMovie, setSortedMovies } =
        useContext(MovieContext);

    const sortByRated = () => {
        const sortedList = [...popularMovie].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.vote_average - b.vote_average;
            } else {
                setSortType("asc");
                return b.vote_average - a.vote_average;
            }
        });
        setSortedMovies(sortedList);
    };
    const sortByPop = () => {
        const sortedList = [...popularMovie].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.popularity - b.popularity;
            } else {
                setSortType("asc");
                return b.popularity - a.popularity;
            }
        });
        setSortedMovies(sortedList);
    };

    const sortById = () => {
        const sortedList = [...popularMovie].sort((a, b) => {
            if (sortType === "asc") {
                setSortType("des");
                return a.id - b.id;
            } else {
                setSortType("asc");
                return b.id - a.id;
            }
        });
        setSortedMovies(sortedList);
    };

    return (
        <>
            <Button
                onClick={sortByRated}
                size="middle"
                style={{
                    marginLeft: "90px",
                    color: "black",
                    backgroundColor: "red"
                }}
            >
                Note
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
            <Button
                onClick={sortByPop}
                size="middle"
                style={{
                    marginLeft: "50px",
                    color: "whitesmoke",
                    backgroundColor: "green"
                }}
            >
                Popularité
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
            <Button
                onClick={sortById}
                size="middle"
                style={{
                    marginLeft: "50px",
                    color: "black",
                    backgroundColor: "blueviolet"
                }}
            >
                ID
                {sortType === "asc" ? (
                    <SortAscendingOutlined />
                ) : (
                    <SortDescendingOutlined />
                )}
            </Button>
        </>
    );
};

export default Movies;
