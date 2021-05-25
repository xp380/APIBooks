import React, { useState, useContext } from "react";
import { MovieContext } from '../Context'
import { Card, Row, Tag, Modal } from 'antd'


const Main = () => {
  const { datas } = useContext(MovieContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Row gutter={16}>
      {datas.map((item, id) => (
        <Card
          key={id}
          style={{ width: 300, margin: 10 }} bordered={true}
          hoverable
          onClick={showModal}
        >
          <div>
            <p style={{ textAlign: "left" }}>{item.title} <span style={{ float: "right" }}>{item.vote_average}</span></p>
          </div>
          <p><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="#" width="200" height="200" /></p>
          <Tag color={"red", "green"}> {item.title}</Tag>
        </Card>
      ))}
      {/* {datas.map((item, id) => (

        <Modal
          title='Detail'
          centered
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          width={800}
        >
          <Tag key={id} color="red"> {item.title}</Tag>
        </Modal>
      ))} */}
    </Row >

  );
};

export default Main;
