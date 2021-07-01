import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import GameList from "./Components/Game";
import Games from "./Components/Games";
// import Search from "./Components/SearchForm";
import SortForm from "./Components/SortForm";

import { GameContext } from "./Context";

const Home = React.memo(() => {
    const { games, sortedGames } = useContext(GameContext);
    const { TabPane } = Tabs;

    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                tabBarGutter={50}
                tabBarStyle={{
                    backgroundColor: "#235e96",
                    padding: 10,
                    position: "fixed",
                    width: "100%",
                    zIndex: 1000
                }}
                style={{ marginTop: 60 }}
            >
                <TabPane tab="Accueil" key="1">
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "monospace",
                            marginTop: 90
                        }}
                    >
                        Liste des jeux vidéos
                    </h3>
                    <SortForm />
                    <Row style={{ marginLeft: 80 }}>
                        {sortedGames.map((testModal) => {
                            return (
                                <GameList key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "number",
                            marginTop: 90
                        }}
                    >
                        Recherche de Jeux Vidéos
                    </h3>
                    {/* <Search /> */}
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
