import React, { useContext } from "react";
import { CryptoContext } from '../Context'
import { Card, Row } from 'antd'

export const Crypto = () => {
  const { cryptos } = useContext(CryptoContext)

  return (
    <Row gutter={16}>
      {cryptos.map((item, id) => (
        <Card
          key={id}
          style={{ width: 300, margin: 10 }} bordered={true}
          hoverable
        >
          <p>
            Quantité totale: {item.total_volume}
            <br />
            Prix actuel: {item.current_price}
            <br />
            Last updated: {item.last_updated}
            <br />
            Nom: {item.name}
            <br />
            <img src={item.image} alt="Smiley face" height="42" width="42"></img>
          </p>
        </Card>
      ))}
    </Row>
  )
};
