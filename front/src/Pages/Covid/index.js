import React from 'react'
import { Tabs } from 'antd'

import { Covid } from './Components/Covid'
import Graph from './Components/Graph'

import { CovidProvider } from './Context'

export default function Covid2020() {
  const { TabPane } = Tabs
  return (
    <CovidProvider>
      <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <h3>Bilan du Covid en France</h3>
            <Covid />
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Représentation Graphique du bilan de Covid</h3>
            <Graph />
          </TabPane>
        </Tabs>
      </>
    </CovidProvider>
  )
}
