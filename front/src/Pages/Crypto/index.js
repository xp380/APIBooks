import React, { useContext } from "react";
import { Tabs, Row } from "antd";
// import { useHistory } from "react-router";

import Search from "./Components/SearchForm";
import CryptoDemo from "./Components/CryptoDemo";
import Graph from "./Components/Graph";
import SortCrypto from "./Components/SortCrypto";
import SortForm from "./Components/SortForm";

import { CryptoContext } from "./Context";

const Home = React.memo(() => {
    const { TabPane } = Tabs;
    const { cryptoSearched, sortedCrypto } = useContext(CryptoContext);

    const card = { marginTop: 60 };
    const table = {
        backgroundColor: "#235e96",
        padding: 10,
        position: "fixed",
        width: "100%",
        zIndex: 1000
    };
    const accueil = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "number",
        marginTop: 90
    };
    const row = { marginLeft: 70 };
    const card2 = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "number",
        marginTop: 70
    };
    const search = {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 80
    };
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                style={card}
                tabBarGutter={50}
                tabBarStyle={table}
            >
                <TabPane tab="Accueil" key="1">
                    <h3 style={accueil}>Liste des Cryptos</h3>
                    <SortForm />
                    <Row style={row}>
                        {sortedCrypto.map((testModal) => {
                            return (
                                <SortCrypto key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3 style={card2}>Liste des Cryptos en graphismes</h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Search" key="3">
                    <h3 style={search}>Recherche</h3>
                    <Search />
                    {cryptoSearched.map((cryptoTest) => {
                        <h3>Liste des Cryptos</h3>;
                        return (
                            <CryptoDemo
                                key={cryptoTest.id}
                                cryptoTest={cryptoTest}
                            />
                        );
                    })}
                </TabPane>
            </Tabs>
        </>
    );
});

export default Home;
