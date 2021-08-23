import React, { useContext } from "react";
import { Button } from "antd";
import { MovieContext } from "../Context";
import {
    SortAscendingOutlined,
    SortDescendingOutlined
} from "@ant-design/icons";
import "./SortForm.css";

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
    const button = {
        marginLeft: "90px",
        backgroundColor: "#e67e22",
        boxShadow: "0px 6px 0px #d35400"
    };
    const button2 = {
        marginLeft: "50px",
        backgroundColor: "#e67e22",
        boxShadow: "0px 6px 0px #d35400"
    };
    return (
        <>
            <Button
                onClick={sortByRated}
                size="middle"
                className="button-3d"
                style={button}
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
                className="button-3d"
                style={button2}
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
                className="button-3d"
                style={button2}
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
