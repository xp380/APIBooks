// import React, {useState, useEffect, createContext} from 'react'
// import axios from 'axios'

// https://api.themoviedb.org/3/movie/upcoming?api_key=30582d63e1f78f53711360b533a5d861
// const api_key = "30582d63e1f78f53711360b533a5d861";
// const BASE_URL = "https://api.themoviedb.org/3";
// // const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);

//   const api = axios.create({ baseURL: BASE_URL });
    
//   const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

//   useEffect(() => {
//     getUpcoming.then((res) => {
//       console.log(res.data, 'lol')
//       setMovies(res.data.results);
//     });
//   }, []);
  
//   const state = {
//       movies,
//       setMovies
//   }
//     return(
//         <MovieContext.Provider value={state}>{children}</MovieContext.Provider>
//     )
// }

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      setUsers(resp.data);
      console.log(resp.data)
    });
  }, []);

  const state = {
    users,
    setUsers
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
