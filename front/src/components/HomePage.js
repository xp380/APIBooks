import React, { useState } from 'react'
import { Layout, Menu, Affix } from 'antd';
// import { DesktopOutlined, PieChartOutlined, FileOutlined, GiftOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Header
import DarkTheme from '../Header/DarkTheme'
import Login from '../Header/Login'
import Register from '../Header/Register'
//Footer

import Weather from '../Footer/Weather';
import LegalMentions from '../Footer/LegalMentions'
import Contact from '../Footer/Contact'
import Time from '../Footer/Time';


function DashBoard() {
    const { Header, Content, Footer, Sider } = Layout;
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
                            <DarkTheme />
                            <Login />
                            <Register />
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
                        <Weather />
                        <br />
                        <Contact />
                        <br />
                        <LegalMentions />
                    </Footer>
                </Layout>
            </Layout>
        </Router>

    );
}


export default function HomePage() {
    return <DashBoard />
}
