import React, { useContext} from 'react'
import { MyGame } from './Components/Game'
import { GameContext } from './Context'
import { Tabs } from "antd"

export default function VideoGames() {
    const { TabPane } = Tabs;
    const gameContext = useContext(GameContext)

    return(
        <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <h3>Liste des Jeux</h3>
            {
              gameContext.games.length !== 0
              ? gameContext.games.map(game => <MyGame game={game} key={game.id} />)
              : <h2>No Games Found</h2>
            }
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Dernières sorties </h3>
          </TabPane>
        </Tabs>
        </>
    )
}