import React, { useState } from 'react'
import { Layout, Menu, Affix } from 'antd';
import { PieChartOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Header

import DarkTheme from './Header/DarkTheme'
import Login from './Header/Login'
import Register from './Header/Register'
//Footer

import Weather from './Footer/Weather';
import LegalMentions from './Footer/LegalMentions'
import Contact from './Footer/Contact'
import Time from './Footer/Time';

//API

import Covid from './Pages/Covid/index'
import Crypto from './Pages/Crypto/index'
import Game from './Pages/Game/index'
import Manga from './Pages/Manga/index'
import Movie from './Pages/Movie/index'

const { Header, Content, Footer, Sider } = Layout;


export default function HomePage() {
    const [top] = useState();
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>

                    <div className="logo" />
                    {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <Link to="/"> HomePage </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                            <Link to="/covid"> Covid </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PieChartOutlined />}>
                            <Link to="/crypto"> Crypto </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PieChartOutlined />}>
                            <Link to="/game"> Game </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<PieChartOutlined />}>
                            <Link to="/manga"> Manga </Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<PieChartOutlined />}>
                            <Link to="/movie"> Movie </Link>
                        </Menu.Item>
                    </Menu> */}
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
                                {/* <Route exact path="/" component={HomePage} />
                                <Route path="/covid" component={Covid} />
                                <Route path="/crypto" component={Crypto} />
                                <Route path="/game" component={Game} />
                                <Route path="/manga" component={Manga} />
                                <Route path="/movie" component={Movie} /> */}

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
