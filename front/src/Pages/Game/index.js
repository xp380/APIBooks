import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import GameList from "./Components/Game";
import Games from "./Components/Games";
import Search from "./Components/SearchForm";
import SortForm from "./Components/SortForm";

import { GameContext } from "./Context";

const Home = React.memo(() => {
    const { games, sortedGames } = useContext(GameContext);
    const { TabPane } = Tabs;

    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Accueil" key="1">
                    <h3>Liste des jeux vidéos</h3>
                    <SortForm />
                    <Row>
                        {sortedGames.map((testModal) => {
                            return (
                                <GameList key={testModal.id} {...testModal} />
                            )
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <Search />
                    {games.slice(0, 1).map((gameTest) => {
                        <h3>Liste des Jeux videos</h3>;
                        return (
                            <Games key={gameTest.mal_id} gameTest={gameTest} />
                        );
                    })}
                </TabPane>

            </Tabs>
        </>
    );
});

export default Home;
