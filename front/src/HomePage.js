import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from "react-router-dom";

import Routes from "./Header/Routes";

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

// import Chat from "./Images/Chat.js";

import { Layout, Menu, Carousel } from "antd";
const { Header, Footer, Content } = Layout;
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79"
};

export default function HomePage() {
    // window.location.reload();

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
                                        // style={{
                                        //     position: "fixed",
                                        //     width: "100%",
                                        //     left: 0,
                                        //     top: 0,
                                        //     right: 0,
                                        //     zIndex: 1000,
                                        //     color: "white"
                                        // }}
                                        >
                                            <Menu
                                                theme="dark"
                                                mode="horizontal"
                                                defaultSelectedKeys={["2"]}
                                            >
                                                <p style={{ marginLeft: 210 }}>
                                                    <Routes />
                                                </p>
                                            </Menu>
                                        </Header>
                                        <Content>
                                            {/* <Carousel autoplay>
                                                <div>
                                                    <h3 style={contentStyle}>
                                                        <Link to="/covids">
                                                            Covids
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <h3 style={contentStyle}>
                                                        <Link to="/cryptos">
                                                            Crypto
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <h3 style={contentStyle}>
                                                        <Link to="/games">
                                                            Games
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <h3 style={contentStyle}>
                                                        <Link to="/mangas">
                                                            Mangas
                                                        </Link>
                                                    </h3>
                                                </div>
                                                <div>
                                                    <h3 style={contentStyle}>
                                                        <Link to="/movies">
                                                            Movies
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </Carousel> */}
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
