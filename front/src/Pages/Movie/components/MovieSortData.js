import React, { useContext } from 'react'
import { MovieContext } from '../Context'
import { Card, Row } from 'antd'


const Movies = () => {
  const { sortedMovies} = useContext(MovieContext)

  return (
    <Row gutter={16}>
        {sortedMovies.map((movie, id) => (
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
        ))} 
    </Row>
  )
}

export default Movies
