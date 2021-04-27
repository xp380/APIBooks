import React, { useState, useEffect } from "react";
import { Tabs,Statistic, Row, Col } from 'antd'
import axios from "axios";

import Chart from './Display'

const Covid = () => {

    const { TabPane } = Tabs;
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.covid19api.com/total/dayone/country/france");
            setData(result.data);
        };
        fetchData();
    }, [data]);

    return (
        <>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Accueil" key="1">
                    <h3 style={{textAlign: "center"}}>Bilan du Covid en France </h3>
                    {data.map(item => (
                     <Row gutter={6}>
                    <Col span={2}>
                    <Statistic title="Confirmés" value={item.Confirmed}  />
                    </Col>
                    <Col span={2}>
                    <Statistic title="Morts" value={item.Deaths}  />
                    </Col>
                    <Col span={2}>
                    <Statistic title="Rétablis" value={item.Recovered}  />
                    </Col>
                    <Col span={2}>
                    <Statistic title="Date" value={item.Date}  />
                    </Col>
                    </Row>
                    ))}
                    
                </TabPane>
                <TabPane tab="Graphisme" key="2">
                    <Chart />
                </TabPane>
                
            </Tabs>

        </>
    );
};

export default Covid