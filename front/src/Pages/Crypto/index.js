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
    // const history = useHistory();
    const { TabPane } = Tabs;
    const { cryptoSearched, sortedCrypto } = useContext(CryptoContext);
    // setTimeout(() => {
    //     history.push("/covids");
    // }, 2000);
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                style={{ marginTop: 60 }}
                tabBarGutter={50}
                tabBarStyle={{
                    backgroundColor: "#235e96",
                    padding: 10,
                    position: "fixed",
                    width: "100%",
                    zIndex: 1000
                }}
            >
                <TabPane tab="Accueil" key="1">
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "number",
                            marginTop: 90
                        }}
                    >
                        Liste des Cryptos
                    </h3>
                    <SortForm />
                    <Row style={{ marginLeft: 70 }}>
                        {sortedCrypto.map((testModal) => {
                            return (
                                <SortCrypto key={testModal.id} {...testModal} />
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
                            marginTop: 70
                        }}
                    >
                        Liste des Cryptos en graphismes
                    </h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Search" key="3">
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 80
                        }}
                    >
                        Recherche
                    </h3>
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
