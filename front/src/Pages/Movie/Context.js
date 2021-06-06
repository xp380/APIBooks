import React, { useState, useEffect, createContext } from "react";
import axios from "axios"
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState("Pokemon")
  const [dataModal, setDataModal] = useState([]);


  const [popularMovie, setPopularMovie] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [searchValue] = useState("");
  const [sortType, setSortType] = useState("asc");

  const getMovie = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861"
      // https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861&page=10
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

  const fetchMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861");
    const data = await response.json();
    setDataModal(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?&Lnguage=en-US&api_key=e944d64e45bd1927514acc391b971f4d")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("something went wrong!");
        }
      })
      .then(res => {
        setPopularMovie(res.results);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let filteredList = popularMovie.filter(movie =>
      movie.title.toLowerCase().includes(searchValue)
    );
    setSortedMovies(filteredList);
  }, [searchValue, popularMovie]);
  // const sortMovies = async () => {
  //   const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861')
  //   setPopularMovie(response.data.results)
  //   let filteredList = popularMovie.filter((movie) =>
  //     movie.title.toLowerCase().includes(searchValue)
  //   );
  //   setSortedMovies(filteredList)
  // };
  // useEffect(() => {
  //   sortMovies()
  // }, [searchValue, popularMovie])


  return (
    <MovieContext.Provider value={{
      datas,
      setSearchMovie,
      movies,
      dataModal,
      sortedMovies, sortType, setSortType, popularMovie, setSortedMovies
    }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
