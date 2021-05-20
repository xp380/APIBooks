import React from "react";
import { Tabs } from 'antd'

import MovieList from "./components/Movie";
import List from './components/List'
export default function Index() {
  const { TabPane } = Tabs

  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <MovieList />
        </TabPane>
        <TabPane tab="Card" key="2">
          <h3>Représentation des Films</h3>
          <List />
        </TabPane>
      </Tabs>
    </>
  );
}
