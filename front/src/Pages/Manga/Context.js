import axios from 'axios';
import React, { useState, useEffect, createContext } from 'react'
const MangaContext = createContext()

const MangaProvider = ({ children }) => {
    const [datas, setDatas] = useState([]);
    const [animes, setAnimes] = useState([])
    const [searchAnime, setSearchAnime] = useState('')

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
                const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchAnime}&page=1`);
                setAnimes(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getAnimes();
    }, [searchAnime]);

    return (
        <MangaContext.Provider value={{ datas, setSearchAnime, animes }}>
            {children}
        </MangaContext.Provider>
    );
}

export { MangaContext, MangaProvider }
