import React, { useContext } from "react";
import { GameContext } from "../Context"

import { Card, Row, Tag } from 'antd'

const Main = () => {
  const { datas } = useContext(GameContext)

  return (
    <>
      <Row gutter={16}>
        {datas.map((item, id) => (
          <Card key={id} style={{ width: 300, margin: 10 }} bordered={true} hoverable >
            <div>
              <p style={{ textAlign: "left" }}>{item.slug} <span style={{ float: "right" }}>{item.rating}</span></p>
            </div>
            <img src={item.background_image} alt="#" width="200" height="200" />
            {/* <Tag>{item.genres}</Tag> */}
            {/* <p>Date de sortie: {item.released}</p> */}
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Main