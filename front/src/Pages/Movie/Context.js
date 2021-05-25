import React, { useState, useEffect, createContext } from "react";
import { getAxios } from "../Function/index";
const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [testdatas, testsetDatas] = useState([]);

  const getMovie = async () => {
    const data = await getAxios(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861"
    );
    setDatas(data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  // const testMovie = async () => {
  //   const data = await getAxios(
  //     "https://api.themoviedb.org/3/movie/578701?api_key=30582d63e1f78f53711360b533a5d861&language=en-US"
  //     // "https://api.themoviedb.org/3/movie/578701?api_key=30582d63e1f78f53711360b533a5d861&language=en-US"
  //   );
  //   testsetDatas(data.genres);
  // };
  // useEffect(() => {
  //   testMovie();
  // }, []);

  return (
    <MovieContext.Provider value={{ datas, testdatas }}>{children}</MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
