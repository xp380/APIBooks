import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom";
import Routes from "./Header/Routes";

import Test from './TestProgress'
import { CryptoProvider } from "./Pages/Crypto/Context";
import { CovidProvider } from "./Pages/Covid/Context";
import { GameProvider } from "./Pages/Game/Context";
import { MangaProvider } from "./Pages/Manga/Context";
import { MovieProvider } from "./Pages/Movie/Context";

import Covid from "./Pages/Covid/index";
import Crypto from "./Pages/Crypto/index";
import Game from "./Pages/Game/index";
import Manga from "./Pages/Manga/index";
import Movies from "./Pages/Movie/index";
import Time from "./Footer/Time";


import { Layout, BackTop } from "antd";
const { Header, Footer, Content } = Layout;

export default function HomePage() {
    return (
        <>
            <Router>
                <CovidProvider>
                    <CryptoProvider>
                        <GameProvider>
                            <MangaProvider>
                                <MovieProvider>
                                    <Layout>
                                        <Header
                                            style={{
                                                position: "fixed",
                                                width: "100%",
                                                left: 0,
                                                top: 0,
                                                right: 0,
                                                zIndex: 1000,
                                                color: "white"
                                            }}
                                        >

                                            <p >
                                                <Routes />
                                            </p>

                                        </Header>
                                        <Content>
                                            <Switch>
                                                <Route path="/covids" exact>
                                                    <Covid />
                                                </Route>

                                                <Route path="/cryptos" exact>
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
                                                <Redirect to="/" />
                                            </Switch>
                                            <BackTop />
                                            <Test />
                                        </Content>
                                    </Layout>
                                </MovieProvider>
                            </MangaProvider>
                        </GameProvider>
                    </CryptoProvider>
                </CovidProvider>
            </Router>
            <Footer
                style={{
                    borderTop: "1px solid #e8e8e8",
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "darkblue",
                    color: "white",
                    height: 20
                }}
            >

                <Time />
            </Footer>
        </>
    );
}

