import React, { useContext } from "react";
import { GameContext } from "../Context"

import { Card, Col, Row } from 'antd'

const Main = () => {
  const { datas } = useContext(GameContext)

  return (
    <>
      <Row gutter={16}>
        <Col span={6} >
          {datas.map((item, id) => (
            <Card key={id} style={{ width: 300 }} bordered={true} hoverable >
              <p>Titre: {item.slug}</p>
              <p>Notes: {item.rating}</p>
              <img src={item.background_image} alt="#" width="200" height="200" />
              <p>Date de sortie: {item.released}</p>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Main