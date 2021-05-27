import React, { useState, useEffect, createContext } from "react";
import axios from "axios"
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("")

  const getMovie = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861"
      // https://api.themoviedb.org/3/movie/120?api_key=30582d63e1f78f53711360b533a5d861
      // https://api.themoviedb.org/3/discover/movie?api_key=30582d63e1f78f53711360b533a5d861&with_genres=28,18
    );
    setDatas(response.data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=30582d63e1f78f53711360b533a5d861&query=${searchMovie}`);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, [searchMovie]);

  return (
    <MovieContext.Provider value={{ datas, setSearchMovie, movies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
