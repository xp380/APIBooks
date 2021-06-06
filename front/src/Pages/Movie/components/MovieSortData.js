import React, { useContext } from 'react'
import { MovieContext } from '../Context'
import { Card, Button, Row } from 'antd'


const Movies = () => {
  const { sortedMovies, sortType, setSortType, popularMovie, setSortedMovies } = useContext(MovieContext)

  const sortByRated = () => {
    const sortedList = [...popularMovie].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.vote_average - b.vote_average;
      } else {
        setSortType("asc");
        return b.vote_average - a.vote_average;
      }
    });
    setSortedMovies(sortedList);
  };
  const sortByPop = () => {
    const sortedList = [...popularMovie].sort((a, b) => {
      if (sortType === "asc") {
        setSortType("des");
        return a.popularity - b.popularity;
      } else {
        setSortType("asc");
        return b.popularity - a.popularity;
      }
    });
    setSortedMovies(sortedList);
  };


  return (
    <>
      <Row>
        <Button
          onClick={sortByRated}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par notes croissantes" : "Trier par notes décroissantes"}
        </Button>
        <Button
          onClick={sortByPop}
          size='middle'
          style={{ marginLeft: "50px" }}
        >
          {sortType === "asc" ? "Trier par popularité croissante" : "Trier par popularité décroissantes"}
        </Button>
      </Row>
      {sortedMovies.length > 0 ? (
        sortedMovies.map((movie, id) => {
          return (
            <Row gutter={16}>
              <Card
                style={{ width: 300, margin: 10 }} bordered={true}
                key={id}
                title={movie.title}
              >
                <div>
                  <p style={{ textAlign: "left" }}>{movie.title} <span style={{ float: "right" }}>note:{movie.vote_average}</span></p>
                  <p>Popularité: {movie.popularity}</p>
                </div>
                <p><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="#" width="200" height="200" /></p>
              </Card>
            </Row>
          );
        })) : (<p>No search result...!</p>
      )}
    </>
  )
}

export default Movies