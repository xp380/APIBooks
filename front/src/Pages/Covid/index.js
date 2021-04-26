import React, { useState, useEffect } from "react";
import { Tabs } from 'antd'
import axios from "axios";

import Chart from './chart'

const Covid = () => {

    const { TabPane } = Tabs;
    const [data, setData] = useState({ allDataByDepartement: [] })
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Paris");
            setData(result.data);
        };
        fetchData();
    }, [data]);

    return (
        <>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Accueil" key="1">
                    {data.allDataByDepartement.map(item => (
                        <ul style={{ marginTop: 100 }}>
                            <li key={item.code}>
                                <div>{item.date}</div>
                                <div>{item.hospitalises}</div>
                                <div>{item.reanimation}</div>
                            </li>
                        </ul>
                    ))}
                </TabPane>
                <TabPane tab="Graphisme" key="2">
                    <Chart />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>

        </>
    );
};

export default Covid