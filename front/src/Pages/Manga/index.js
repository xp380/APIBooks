import React, { useContext } from 'react'
import { Tabs } from 'antd'

import MangaList from './Components/Manga'
import Mangas from './Components/Mangas'
import Search from './Components/SearchForm'
import { MangaContext } from './Context'

const Home = React.memo(() => {
  const { animes } = useContext(MangaContext)
  const { TabPane } = Tabs

  if (!animes) {
    return (
      'error'
    );
  }
  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <MangaList />
        </TabPane>
        <TabPane tab="Card" key="2">
          <Search />
          {animes.slice(0, 1).map((animeTest) => {
            <h3>Liste des Mangas</h3>
            return <Mangas key={animeTest.mal_id} animeTest={animeTest} />;
          })}
        </TabPane>
      </Tabs>
    </>
  );
});
export default Home;