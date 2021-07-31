import React, { useState, useEffect, createContext } from "react"
import axios from "axios"
const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [covidDelta, setCovidDelta] = useState([])
    const [cryptoMoney, setCryptoMonney] = useState([])
    const [gamePlay, setGamePlay] = useState([])
    const [mangaAnime, setMangaAnime] = useState([])
    const [movieWatch, setMovieWatch] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?&Lnguage=en-US&api_key=e944d64e45bd1927514acc391b971f4d`)
                setMovieWatch(response.data.results);
            } catch (err) {
                console.log(err)
            }
        }
        getMovies()
    }, [])


    return (
        <GlobalContext.Provider
            value={{
                movieWatch, setMovieWatch
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider }