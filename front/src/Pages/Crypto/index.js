import React, { useContext } from "react";

import { Crypto } from "./Components/Crypto";
import Graph from './Components/Graph'

import { CryptoContext } from "./Context";
import { Tabs, Input } from 'antd';

export default function Bitcoin() {
  const { TabPane } = Tabs;

  const cryptoContext = useContext(CryptoContext);

  return (
    <div className="App">
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <h3>Liste des Cryptos</h3>
          {
            cryptoContext.cryptos.length !== 0
              ? cryptoContext.cryptos.map(crypto => <Crypto crypto={crypto} key={crypto.id} />)
              : <h2>No Cryptos Found</h2>
          }
        </TabPane>
        <TabPane tab="Card" key="2">
          <h3>Liste des Cryptos en graphismes</h3>
          <Graph />
        </TabPane>
      </Tabs>
    </div>
  );
}
