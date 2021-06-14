import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const GameContext = createContext();

const GameProvider = ({ children }) => {
    const [datas, setDatas] = useState([]);
    const [games, setGames] = useState([]);
    const [searchGame, setSearchGame] = useState("");
    const [dataModal, setDataModal] = useState([]);
    const [genres, setGenres] = useState([]);

    const [popularGame, setPopularGame] = useState([]);
    const [sortedGames, setSortedGames] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");

    const getGame = async () => {
        const response = await axios(
            "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
            // `https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a&search=${searchTerm}`
            // https://api.rawg.io/api/genres/3?key=9b12083a67134bbdad6628f19da1e91a pour jeux d'aventures(3)
            // https://api.rawg.io/api/genres?key=9b12083a67134bbdad6628f19da1e91a liste de genres
        );
        setDatas(response.data.results);
    };
    useEffect(() => {
        getGame();
    }, []);

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

    const fetchGames = async () => {
        const response = await fetch(
            "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
        );
        const data = await response.json();
        setDataModal(data.results);
    };

    useEffect(() => {
        fetchGames();
    }, []);

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
                datas,
                setSearchGame,
                games,
                dataModal,
                sortedGames,
                sortType,
                setSortType,
                popularGame,
                setSortedGames,
                genres
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameProvider };
