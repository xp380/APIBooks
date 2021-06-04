import React, { useContext } from 'react'
import { MovieContext } from '../Context'
import { Card, Col, Row } from 'antd'
 

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
      const sortByTitle = () => {
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
      
      
    return(
        <>
        <Row>
        <Col md={3} xs={12}>
          <button
            onClick={sortByRated}
            style={{ width: "50%" }}
          >
            sort by Ratings
            {/* {sortType === "asc" ? "Tier par notes croissantes" : "Trier par notes décroissantes"} */}
          </button>
          <button
            onClick={sortByTitle}
            style={{ width: "50%" }}
          >
            sort by popularity
            {/* {sortType === "asc" ? "Tier par titre croissantes" : "Trier par titre décroissantes"} */}
          </button>
          
        </Col>
      </Row>
         {sortedMovies.length > 0 ? (
          sortedMovies.map((movie, index) => {
            return (
                <Card
                  title={movie.title}
                >
                     <div>
                        <p style={{ textAlign: "left" }}>{movie.title} <span style={{ float: "right" }}>{movie.vote_average}</span></p>
                        <p>{movie.vote_average}</p>
                        <p>{movie.popularity}</p>
                    </div>
                    <p><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="#" width="200" height="200" /></p>
                  </Card>
            );
          })
        ) : (
          <p>No search result...!</p>
        )}
        </>
    )
}

export default Movies