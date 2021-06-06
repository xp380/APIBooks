import React, { useContext } from 'react'
import { Tabs } from 'antd'

import { Covid } from './Components/Covid'
import Graph from './Components/Graph'
import Search from './Components/SelectForm'
import TestCovid from './Components/TestCovid'

import { CovidContext } from './Context'

export default function Covid2020() {
  const { covids } = useContext(CovidContext)
  const { TabPane } = Tabs
  return (
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
        <TabPane tab="Test Select" key="3">
          <h3>Test changement de pays</h3>
          <Search />
        </TabPane>
        <TabPane tab="lol" key="4">
          {covids.map((singleModal) => {
            return <TestCovid key={singleModal} {...singleModal} />
          })}
          {/* <TestCovid /> */}
        </TabPane>
      </Tabs>
    </>
  )
}
