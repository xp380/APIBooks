import React, { useContext } from "react";
import { Tabs } from "antd";

import { Covid } from "./Components/Covid";
import Graph from "./Components/Graph";
import Search from "./Components/SelectForm";
import CovidDemo from "./Components/CovidDemo";
import TestCovid from "./Components/TestCovid";
import SortCovid from "./Components/SortCovid";
import SortForm from "./Components/SortForm";

import { CovidContext } from "./Context";

export default function Covid2020() {
    const { covids, covidSearched } = useContext(CovidContext);
    const { TabPane } = Tabs;
    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Accueil" key="1">
                    <h3>Bilan du Covid en France</h3>
                    <Covid />
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3>Représentation Graphique du bilan de Covid</h3>
                    <Graph />
                </TabPane>
                <TabPane tab="Test Select" key="3">
                    <h3>Test changement de pays</h3>
                    <Search />
                    {covidSearched.slice(0, 1).map((covidTest) => {
                        <h3>Représentation des Covids</h3>;
                        return (
                            <CovidDemo
                                key={covidTest.ID}
                                covidTest={covidTest}
                            />
                        );
                    })}
                </TabPane>
                <TabPane tab="lol" key="4">
                    {covids.map((singleModal) => {
                        return <TestCovid key={singleModal} {...singleModal} />;
                    })}
                </TabPane>
                <TabPane tab="sort" key="5">
                    <SortForm />
                    <SortCovid />
                </TabPane>
            </Tabs>
        </>
    );
}
