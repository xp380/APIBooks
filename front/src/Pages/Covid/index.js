import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import Graph from "./Components/Graph";
import Search from "./Components/SelectForm";
import CovidDemo from "./Components/CovidDemo";
import SortCovid from "./Components/SortCovid";
import SortForm from "./Components/SortForm";

import { CovidContext } from "./Context";

export default function Covid2020() {
    const { sortedCovid, covidSearched } = useContext(CovidContext);
    const { TabPane } = Tabs;
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
                    <h2
                        style={{
                            marginLeft: "45%",
                            fontFamily: "fantasy",
                            fontWeight: "bold",
                            marginTop: 90
                        }}
                    >
                        Bilan du Covid en France
                    </h2>
                    <SortForm />
                    <Row style={{ marginLeft: 70 }}>
                        {sortedCovid.map((testModal) => {
                            return (
                                <SortCovid key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3
                        style={{
                            fontFamily: "cursive",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 70
                        }}
                    >
                        Représentation Graphique du bilan de Covid
                    </h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Test Select" key="3">
                    <h3
                        style={{
                            fontFamily: "cursive",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 70
                        }}
                    >
                        Test changement de pays
                    </h3>
                    <Search />
                    {covidSearched.slice(0, 1).map((covidTest) => {
                        <h3>Représentation des Covids</h3>;
                        return <CovidDemo key={covidTest.id} {...covidTest} />;
                    })}
                </TabPane>
            </Tabs>
        </>
    );
}
