import React, { createContext, useState, useEffect } from "react";
import { getAxios } from '../Function/index'
const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const getGame = async () => {
    const data = await getAxios(
      "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
    );
    setDatas(data.results);
  };
  useEffect(() => {
    getGame();
  }, []);
  return (
    <GameContext.Provider value={{ datas }}>{children}</GameContext.Provider>
  );
};

export { GameContext, GameProvider }