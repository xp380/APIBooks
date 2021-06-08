import React, { useContext } from "react";
import { Button } from "antd";
import { MovieContext } from "../Context";

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

    return (
        <>
            <Button
                onClick={sortByRated}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par notes croissantes"
                    : "Trier par notes décroissantes"}
            </Button>
            <Button
                onClick={sortByPop}
                size="middle"
                style={{ marginLeft: "50px" }}
            >
                {sortType === "asc"
                    ? "Trier par popularité croissante"
                    : "Trier par popularité décroissantes"}
            </Button>
        </>
    );
};

export default Movies;
