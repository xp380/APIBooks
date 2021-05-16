import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [results, setResults] = useState([])

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios("https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a")
          setResults(result.data)
          console.log(result.data.results)
      }
      fetchData()
    }, [])
    

  const state = {
    results,
    setResults
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};
