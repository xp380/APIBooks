import React, { useContext } from "react";
import { Crypto } from "./Components/Crypto";
import { CryptoContext } from "./Context";
import { Tabs} from 'antd';

export default function Bitcoin() {
  const { TabPane } = Tabs;
  const cryptoContext = useContext(CryptoContext);

  return (
    <div className="App">
      <div>
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
            <h3>Liste des Cryptos</h3>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
