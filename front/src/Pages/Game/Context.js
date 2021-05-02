import React, { createContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState({ results: [] })

    const fetchGames = () => {
        fetch('https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
    }
    useEffect(()=> {
        fetchGames()
    }, [])

  const state = {
    games,
    setGames
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};
