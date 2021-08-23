import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import Graph from "./Components/Graph";
import Search from "./Components/SelectForm";
import CovidDemo from "./Components/CovidDemo";
import SortCovid from "./Components/SortCovid";
import SortForm from "./Components/SortForm";

import { CovidContext } from "./Context";

export default function Covid2020() {
    const { sortedCovid } = useContext(CovidContext);
    const { TabPane } = Tabs;

    const card = {
        marginTop: 60
    };
    const row = {
        marginLeft: 70
    };
    const table = {
        fontFamily: "cursive",
        textAlign: "center",
        fontWeight: "bold",
        marginTop: 70
    };

    const accueil = {
        marginLeft: "45%",
        fontFamily: "fantasy",
        fontWeight: "bold",
        marginTop: 90
    };
    const design = {
        backgroundColor: "#235e96",
        padding: 10,
        position: "fixed",
        width: "100%",
        zIndex: 1000
    };
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                style={card}
                tabBarGutter={50}
                tabBarStyle={design}
            >
                <TabPane tab="Accueil" key="1">
                    <h2 style={accueil}>Bilan du Covid en France</h2>
                    <SortForm />
                    <Row style={row}>
                        {sortedCovid.map((testModal) => {
                            return (
                                <SortCovid key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3 style={table}>
                        Représentation Graphique du bilan de Covid
                    </h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Test Select" key="3">
                    <h3 style={table}>Test changement de pays</h3>
                    <Search />
                    {sortedCovid.slice(0, 1).map((covidTest) => {
                        <h3>Représentation des Covids</h3>;
                        return <CovidDemo key={covidTest.id} {...covidTest} />;
                    })}
                </TabPane>
            </Tabs>
        </>
    );
}
