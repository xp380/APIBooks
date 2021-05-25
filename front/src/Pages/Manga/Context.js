import React, { useState, useEffect, createContext } from 'react'
import { getAxios } from '../Function/index'
const MangaContext = createContext()

const MangaProvider = ({ children }) => {
    const [datas, setDatas] = useState([]);
    const getManga = async () => {
        const data = await getAxios(
            // "https://api.jikan.moe/v3/anime/5114"
            "https://api.jikan.moe/v3/top/anime"
        );
        setDatas(data.top);
    };
    useEffect(() => {
        getManga();
    }, []);
    return (
        <MangaContext.Provider value={{ datas }}>{children}</MangaContext.Provider>
    );
}

export { MangaContext, MangaProvider }
