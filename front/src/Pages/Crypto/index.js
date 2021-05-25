import React from "react";
import { Tabs } from 'antd';

import { Crypto } from "./Components/Crypto";
import Graph from './Components/Graph'

import { CryptoProvider } from "./Context";

export default function Bitcoin() {
  const { TabPane } = Tabs;


  return (
    <CryptoProvider>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <h3>Liste des Cryptos</h3>
          <Crypto />
        </TabPane>
        <TabPane tab="Card" key="2">
          <h3>Liste des Cryptos en graphismes</h3>
          <Graph />
        </TabPane>
      </Tabs>
    </CryptoProvider>
  );
}
