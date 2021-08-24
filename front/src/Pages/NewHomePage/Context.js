import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [covidDelta, setCovidDelta] = useState("");
    const [cryptoMoney, setCryptoMonney] = useState([]);
    const [gamePlay, setGamePlay] = useState([]);
    const [mangaAnime, setMangaAnime] = useState([]);
    const [movieWatch, setMovieWatch] = useState([]);

    useEffect(() => {
        const fetchCovid = async () => {
            const result = await axios("https://disease.sh/v3/covid-19/all");
            setCovidDelta(result.data);
        };
        fetchCovid();
    }, []);

    useEffect(() => {
        const fetchCrypto = async () => {
            const result = await axios(
                "https://api.coingecko.com/api/v3/search/trending"
            );
            setCryptoMonney(result.data.coins);
        };
        fetchCrypto();
    }, []);

    useEffect(() => {
        const fetchGame = async () => {
            const response = await axios(
                `https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a`
            );
            setGamePlay(response.data.results);
        };
        fetchGame();
    }, []);

    const getManga = async () => {
        const response = await axios.get("https://api.jikan.moe/v3/top/anime");
        setMangaAnime(response.data.top);
    };
    useEffect(() => {
        getManga();
    }, []);

    const getMovie = async () => {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861"
        );
        setMovieWatch(response.data.results);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                covidDelta,
                setCovidDelta,
                cryptoMoney,
                setCryptoMonney,
                gamePlay,
                setGamePlay,
                mangaAnime,
                setMangaAnime,
                movieWatch,
                setMovieWatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
