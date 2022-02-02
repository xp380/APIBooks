import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Search from "./Header/SearchForm";
import Routes from "./Header/Routes";

import Progress from "./Footer/TestProgress";
import { CryptoProvider } from "./Pages/Crypto/Context";
import { CovidProvider } from "./Pages/Covid/Context";
import { GameProvider } from "./Pages/Game/Context";
import { MangaProvider } from "./Pages/Manga/Context";
import { MovieProvider } from "./Pages/Movie/Context";
import { GlobalProvider } from "./Pages/NewHomePage/Context";

import Covid from "./Pages/Covid/index";
import Crypto from "./Pages/Crypto/index";
import Game from "./Pages/Game/index";
import Manga from "./Pages/Manga/index";
import Movies from "./Pages/Movie/index";
import NewHome from "./Pages/NewHomePage/index";
import Time from "./Footer/Time";

import "./HomePage.css";

import { Layout, BackTop, Menu } from "antd";
const { Header, Footer, Content } = Layout;

const foot = {
    borderTop: "1px solid #e8e8e8",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#001529",
    color: "white",
    height: 50
};

export default function HomePage() {
    return (
        <>
            <Router>
                <CovidProvider>
                    <CryptoProvider>
                        <GameProvider>
                            <MangaProvider>
                                <MovieProvider>
                                    <GlobalProvider>
                                        <Layout>
                                            <Header className="head">
                                                <Menu
                                                    theme="dark"
                                                    className="menu"
                                                    mode="horizontal"
                                                    defaultSelectedKeys={["2"]}
                                                >
                                                    <p>
                                                        <Routes />
                                                    </p>
                                                </Menu>
                                                <div className="search">
                                                    <Search />
                                                </div>
                                            </Header>
                                            <Content className="content">
                                                <Switch>
                                                    <Route path="/covids" exact>
                                                        <Covid />
                                                    </Route>

                                                    <Route
                                                        path="/cryptos"
                                                        exact
                                                    >
                                                        <Crypto />
                                                    </Route>
                                                    <Route path="/games" exact>
                                                        <Game />
                                                    </Route>
                                                    <Route path="/mangas" exact>
                                                        <Manga />
                                                    </Route>
                                                    <Route path="/movies" exact>
                                                        <Movies />
                                                    </Route>
                                                    <Route
                                                        path="/newHome"
                                                        exact
                                                    >
                                                        <NewHome />
                                                    </Route>
                                                    <Redirect to="/newHome" />
                                                </Switch>
                                                <BackTop />
                                            </Content>
                                        </Layout>
                                    </GlobalProvider>
                                </MovieProvider>
                            </MangaProvider>
                        </GameProvider>
                    </CryptoProvider>
                </CovidProvider>
            </Router>
            <Footer style={foot}>
                <Progress />
                <Time />
            </Footer>
        </>
    );
}
