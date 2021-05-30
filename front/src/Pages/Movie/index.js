import React, { useContext } from "react";
import { Tabs } from 'antd'

import MovieList from "./components/Movie";
import Movies from './components/Movies'
import MoviesTest from './components/MoviesTest'
import Search from './components/SearchForm'
import { MovieContext } from './Context'

const Home = React.memo(() => {
  const { movies, dataModal } = useContext(MovieContext)
  const { TabPane } = Tabs

  if (!movies) {
    return (
      'error'
    );
  }
  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <MovieList />
        </TabPane>
        <TabPane tab="Card" key="2">
          <Search />
          {movies.slice(0, 1).map((moviesTest) => {
            <h3>Représentation des Films</h3>
            return <Movies key={moviesTest.id} moviesTest={moviesTest} />;
          })}
        </TabPane>
        <TabPane tab="Modal" key="3">
        {dataModal.map((singleUser) => {
          return <MoviesTest key={singleUser.id} {...singleUser} />;
        })}
        </TabPane>
      </Tabs>
    </>
  );
});
export default Home;