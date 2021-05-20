import React, { useContext } from "react";
import { MovieContext } from '../Context'

import { Card, Col, Row } from 'antd'

const Main = () => {
  const { datas } = useContext(MovieContext)
  return (
    <>
      <Row gutter={16}>
        <Col span={6} >
          {datas.map((item, id) => (
            <Card key={id} style={{ width: 300 }} bordered={true} hoverable >
              <p>Titre: {item.title}</p>
              <p>résumé: {item.overview}</p>
              <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="#" width="200" height="200" />
              <p>Date: {item.release_date}</p>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Main;
