import React, { createContext, useState, useEffect } from "react";
import axios from "axios"
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [games, setGames] = useState([])
  const [searchGame, setSearchGame] = useState('')

  const getGame = async () => {
    const response = await axios(
      "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
      // `https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a&search=${searchTerm}`
    );
    setDatas(response.data.results);
  };
  useEffect(() => {
    getGame();
  }, []);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a&search=${searchGame}`)
        setGames(response.data.results);
      } catch (err) {
        console.log(err)
      }
    }
    getGames()
  }, [searchGame])
  return (
    <GameContext.Provider value={{ datas, setSearchGame, games }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider }