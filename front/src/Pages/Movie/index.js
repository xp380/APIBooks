import React from "react";
import { Tabs } from 'antd'

import MovieList from "./components/Movie";
import List from './components/List'
import Search from './components/SearchForm'
import { MovieProvider } from './Context'

export default function Index() {
  const { TabPane } = Tabs

  return (
    <MovieProvider>
      <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <Search />

            <MovieList />
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Représentation des Films</h3>
            <List />
          </TabPane>

        </Tabs>
      </>
    </MovieProvider>
  );
}
