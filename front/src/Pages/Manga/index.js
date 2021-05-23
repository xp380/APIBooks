import React from 'react'
import { Tabs } from 'antd'

import MangaList from './Components/Manga'
import List from './Components/List'
import { MangaProvider } from './Context'
export default function Index() {
  const { TabPane } = Tabs

  return (
    <MangaProvider>
      <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <h3>Liste des mangas</h3>
            <MangaList />
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Liste des mangas en carte</h3>
            <List />
          </TabPane>
        </Tabs>
      </>
    </MangaProvider>

  )
}