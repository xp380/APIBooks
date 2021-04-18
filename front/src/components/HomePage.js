import React, { useState } from 'react'
import { Layout, Menu, Affix } from 'antd';
// import { DesktopOutlined, PieChartOutlined, FileOutlined, GiftOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Time from '../Footer/Time';

const { Header, Content, Footer, Sider } = Layout;

function DashBoard() {
    const [top] = useState();
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>

                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Affix offsetTop={top}>
                        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'right', color: "white" }}>

                        </Header>
                    </Affix>
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Switch>

                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', fontWeight: 'bold' }}>
                        <Time />
                        <br />
                        Mentions Légales
                        <br />
                        Contact
                        <br />
                        Réseaux sociaux
                    </Footer>
                </Layout>
            </Layout>
        </Router>

    );
}


export default function App() {
    return <DashBoard />
}
