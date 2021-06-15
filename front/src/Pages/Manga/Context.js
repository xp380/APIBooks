import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
const MangaContext = createContext();

const MangaProvider = ({ children }) => {
    const [animes, setAnimes] = useState([]);
    const [searchAnime, setSearchAnime] = useState("Pokemon");
    const [dataModal, setDataModal] = useState([]);

    const [popularManga, setPopularManga] = useState([]);
    const [sortedMangas, setSortedMangas] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");

    useEffect(() => {
        const getAnimes = async () => {
            try {
                const response = await axios.get(
                    `https://api.jikan.moe/v3/search/anime?q=${searchAnime}&page=1`
                );
                setAnimes(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getAnimes();
    }, [searchAnime]);

    const sortManga = async () => {
        const response = await axios.get(
            "https://api.jikan.moe/v3/genre/anime/1/1"
        );
        setPopularManga(response.data.anime);
        setDataModal(response.data.anime);
    };
    useEffect(() => {
        sortManga();
    }, []);

    useEffect(() => {
        let filteredList = popularManga.filter((manga) =>
            manga.title.toLowerCase().includes(searchValue)
        );
        setSortedMangas(filteredList);
    }, [searchValue, popularManga]);
    return (
        <MangaContext.Provider
            value={{
                setSearchAnime,
                animes,
                dataModal,
                sortedMangas,
                sortType,
                setSortType,
                popularManga,
                setSortedMangas
            }}
        >
            {children}
        </MangaContext.Provider>
    );
};

export { MangaContext, MangaProvider };
