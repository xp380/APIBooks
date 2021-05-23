import React, { useContext } from "react";
import { MovieContext } from '../Context'
import { Card, Row, } from 'antd'


const Main = () => {
  const { datas } = useContext(MovieContext)
  return (
    <Row gutter={16}>
      {datas.map((item, id) => (
        <Card
          key={id}
          style={{ width: 300, margin: "1,5%" }} bordered={true}
          hoverable
          cover={<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="#" width="200" height="200" />}>
          <p>
            Date: {item.release_date}
            <br />
            title: {item.title}
            <br />
            Synopsis: {item.overview}
          </p>
        </Card>
      ))}
    </Row >
  );
};

export default Main;
