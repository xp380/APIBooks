import React from 'react'
import { Tabs } from 'antd'

import MangaList from './Components/Manga'
import List from './Components/List'
export default function Index() {
  const { TabPane } = Tabs

  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <MangaList />
        </TabPane>
        <TabPane tab="Card" key="2">
          <h3>Liste des mangas en carte</h3>
          <List />
        </TabPane>
      </Tabs>
    </>
  )
}