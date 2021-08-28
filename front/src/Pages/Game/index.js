import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import GameList from "./Components/SortGame";
import Games from "./Components/SearchGame";
import SortForm from "./Components/SortForm";

import { GameContext } from "./Context";

const Home = React.memo(() => {
    const { games, sortedGames } = useContext(GameContext);
    const { TabPane } = Tabs;

    const card = {
        backgroundColor: "#235e96",
        padding: 10,
        position: "fixed",
        width: "100%",
        zIndex: 1000
    };
    const table = { marginTop: 60 };
    const accueil = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "monospace",
        marginTop: 90
    };
    const row = { marginLeft: 80 };
    const search = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "number",
        marginTop: 90
    };
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                tabBarGutter={50}
                tabBarStyle={card}
                style={table}
            >
                <TabPane tab="Accueil" key="1">
                    <h3 style={search}>Recherche de Jeux Vidéos</h3>
                    {games.slice(0, 1).map((gameTest) => {
                        <h3>Liste des Jeux videos</h3>;
                        return (
                            <Games key={gameTest.mal_id} gameTest={gameTest} />
                        );
                    })}
                    <h3 style={accueil}>Liste des jeux vidéos</h3>
                    <SortForm />
                    <Row style={row}>
                        {sortedGames.map((testModal) => {
                            return (
                                <GameList key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                {/* <TabPane tab="Card" key="2">
                    <h3 style={search}>Recherche de Jeux Vidéos</h3>
                    {games.slice(0, 1).map((gameTest) => {
                        <h3>Liste des Jeux videos</h3>;
                        return (
                            <Games key={gameTest.mal_id} gameTest={gameTest} />
                        );
                    })}
                </TabPane> */}
            </Tabs>
        </>
    );
});

export default Home;
