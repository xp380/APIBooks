import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [games, setGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");

    const [popularGame, setPopularGame] = useState([]);
    const [sortedGames, setSortedGames] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");

    useEffect(() => {
        const getGames = async () => {
            try {
                const response = await axios.get(
                    `https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a&search=${searchGame}`
                );
                setGames(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getGames();
    }, [searchGame]);

    // https://api.rawg.io/api/games/portal?key=9b12083a67134bbdad6628f19da1e91a
    useEffect(() => {
        fetch(
            "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
        )
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("something went wrong!");
                }
            })
            .then((res) => {
                setPopularGame(res.results);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        let filteredList = popularGame.filter((game) =>
            game.name.toLowerCase().includes(searchValue)
        );
        setSortedGames(filteredList);
    }, [searchValue, popularGame]);

    return (
        <GameContext.Provider
            value={{
                setSearchGame,
                games,
                sortedGames,
                sortType,
                setSortType,
                popularGame,
                setSortedGames
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
