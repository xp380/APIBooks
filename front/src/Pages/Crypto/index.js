import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import Search from "./Components/SearchForm";
import CryptoDemo from "./Components/CryptoDemo";
import Graph from "./Components/Graph";
import SortCrypto from "./Components/SortCrypto";
import SortForm from "./Components/SortForm";

import { CryptoContext } from "./Context";

const Home = React.memo(() => {
    const { TabPane } = Tabs;
    const { cryptoSearched, sortedCrypto } = useContext(CryptoContext);



    return (
        <>
            <Tabs defaultActiveKey="1" style={{ marginTop: 60 }}>
                <TabPane tab="Accueil" key="1">
                    <h3>Liste des Cryptos</h3>
                    <SortForm />
                    <Row>
                        {sortedCrypto.map((testModal) => {
                            return (
                                <SortCrypto key={testModal.id} {...testModal} />
                            )
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3>Liste des Cryptos en graphismes</h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Search" key="3">
                    <h3>Recherche</h3>
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
