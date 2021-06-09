import React, { useContext } from "react";
import { Tabs } from "antd";

import { Crypto } from "./Components/Crypto";
import Cryptos from "./Components/Cryptos";
import Search from "./Components/SearchForm";
import Graph from "./Components/Graph";
import TestCrypto from "./Components/TestCrypto";
import SortCrypto from "./Components/SortCrypto";
import SortForm from "./Components/SortForm";

import { CryptoContext } from "./Context";

const Home = React.memo(() => {
    const { TabPane } = Tabs;
    const { cryptoData, cryptos } = useContext(CryptoContext);

    if (!cryptoData) {
        return "error";
    }

    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Accueil" key="1">
                    <h3>Liste des Cryptos</h3>
                    <Crypto />
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3>Liste des Cryptos en graphismes</h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Search" key="3">
                    <h3>Recherche</h3>
                    <Search />
                    {cryptoData.map((cryptoTest) => {
                        <h3>Liste des Mangas</h3>;
                        return (
                            <Cryptos
                                key={cryptoTest.id}
                                cryptoTest={cryptoTest}
                            />
                        );
                    })}
                </TabPane>
                <TabPane tab="Graph Select" key="4">
                    <h3>Sélection des Crypto</h3>
                    {cryptos.map((singleModal) => {
                        return <TestCrypto key={cryptos.id} {...singleModal} />;
                    })}
                </TabPane>
                <TabPane tab="Sort" key="5">
                    <SortForm />
                    <SortCrypto />
                </TabPane>
            </Tabs>
        </>
    );
});

export default Home;
