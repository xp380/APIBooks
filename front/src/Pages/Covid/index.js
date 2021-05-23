import React, { useContext } from 'react'
import { Tabs } from 'antd'

import { Covid } from './Components/Covid'
import Graph from './Components/Graph'
import { CovidContext } from './Context'

export default function Covid2020() {
  const { TabPane } = Tabs
  const covidContext = useContext(CovidContext)
  return (
    <>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Accueil" key="1">
          <h3>Bilan du Covid en France</h3>
          {
            covidContext.covids.length !== 0
              ? covidContext.covids.map(covid => <Covid covid={covid} key={covid.CountryCode} />)
              : <h2>No Data Found</h2>
          }
        </TabPane>
        <TabPane tab="Card" key="2">
          <h3>Représentation Graphique du bilan de Covid</h3>
          <Graph />
        </TabPane>
      </Tabs>
    </>

  )
}
