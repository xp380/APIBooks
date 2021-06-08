import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
const MangaContext = createContext();

const MangaProvider = ({ children }) => {
    const [datas, setDatas] = useState([]);
    const [animes, setAnimes] = useState([]);
    const [searchAnime, setSearchAnime] = useState("Pokemon");
    const [dataModal, setDataModal] = useState([]);

    const [popularManga, setPopularManga] = useState([]);
    const [sortedMangas, setSortedMangas] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");

    const getManga = async () => {
        const response = await axios.get(
            // "https://api.jikan.moe/v3/anime/5114"
            "https://api.jikan.moe/v3/top/anime"
            // https://api.jikan.moe/v3/genre/anime/1/1
        );
        setDatas(response.data.top);
    };
    useEffect(() => {
        getManga();
    }, []);

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

    const fetchManga = async () => {
        const response = await axios.get("https://api.jikan.moe/v3/top/anime");
        setDataModal(response.data.top);
    };
    useEffect(() => {
        fetchManga();
    }, []);

    useEffect(() => {
        fetch("https://api.jikan.moe/v3/top/anime")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("something went wrong!");
                }
            })
            .then((res) => {
                setPopularManga(res.top);
            })
            .catch((err) => console.log(err));
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
                datas,
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
