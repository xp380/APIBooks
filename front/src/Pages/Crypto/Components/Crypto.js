import React from "react";

export const Crypto = ({ crypto }) => {
  const { name, current_price, total_volume } = crypto;

  return (
    <>
      <h3>name: {name}</h3>
      <div>Prix actuel: {current_price}</div>
      <div>Quantité totale: {total_volume}</div>
    </>
  );
};
