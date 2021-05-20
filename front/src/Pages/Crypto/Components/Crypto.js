import React from "react";
import {Descriptions } from 'antd'

export const Crypto = ({ crypto }) => {
  const { name, current_price, total_volume, image, last_updated } = crypto;

  return (
    <>
    <Descriptions title={name}>
      <Descriptions.Item label="Logo"><img src={image} alt="Smiley face" height="42" width="42"></img></Descriptions.Item>
      <Descriptions.Item label="Prix actuel">{current_price}</Descriptions.Item>
      <Descriptions.Item label="Quantité totale">{total_volume}</Descriptions.Item>
      <Descriptions.Item label="Dernière mise à jour">{last_updated}</Descriptions.Item>
    </Descriptions>
    </>
  );
};
