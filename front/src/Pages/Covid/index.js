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
            <Tabs defaultActiveKey="1" style={{ marginTop: 60, }}>
                <TabPane tab="Accueil" key="1">
                    <h3>Bilan du Covid en France</h3>
                    <SortForm />
                    <Row style={{ marginLeft: 70 }}>
                        {sortedCovid.map((testModal) => {
                            return (
                                <SortCovid key={testModal.id} {...testModal} />
                            )
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3>Représentation Graphique du bilan de Covid</h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Test Select" key="3" >
                    <h3>Test changement de pays</h3>
                    <Search />
                    {covidSearched.slice(0, 1).map((covidTest) => {
                        <h3>Représentation des Covids</h3>;
                        return (
                            <CovidDemo
                                key={covidTest.id}
                                {...covidTest}
                            />
                        );
                    })}
                </TabPane>
            </Tabs>
        </>
    );
}
