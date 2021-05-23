import React, { useState } from 'react'
import { Tabs, Input } from "antd"
import { GameProvider } from './Context'


import GameList from './Components/Game'
import List from './Components/List'

export default function Index() {
  const { TabPane } = Tabs;
  const { Search } = Input;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <GameProvider>
      <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <h3>Liste des jeux vidéos</h3>
            <Search style={{ width: 300 }} placeholder="insérer le nom du jeu" onSearch={handleChange} enterButton />
            <GameList />
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Représentation des Films</h3>
            <List />
          </TabPane>
        </Tabs>
      </>
    </GameProvider>
  )
}