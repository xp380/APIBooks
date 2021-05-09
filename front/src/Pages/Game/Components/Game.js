import React from "react";

export const MyGame = ({ game }) => {
  const {slug, released, ratings, background_image, count, next, previous } = game

  return (
    <>
      <h3> Nom du jeu: {slug}</h3>
      <p>Date de publication: {released}</p>
      <p>Critiques: {ratings}</p>
      <p><img src={background_image} alt="game" style= {{width: 100, height: 100 }}/></p>
      <h3>{count}</h3>
      <p>{next}</p>
      <p>{previous}</p>
    </>
  );
};