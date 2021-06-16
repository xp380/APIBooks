import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

import { CryptoProvider } from "../Pages/Crypto/Context";
import { CovidProvider } from "../Pages/Covid/Context";
import { GameProvider } from "../Pages/Game/Context";
import { MangaProvider } from "../Pages/Manga/Context";
import { MovieProvider } from "../Pages/Movie/Context";

export default function Routes() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <CovidProvider>
                <CryptoProvider>
                    <GameProvider>
                        <MangaProvider>
                            <MovieProvider>
                                <Router>
                                    <Button type="primary" onClick={showDrawer}>
                                        <MenuFoldOutlined />
                                    </Button>
                                    <Drawer
                                        title="Menu"
                                        placement="left"
                                        closable={false}
                                        onClose={onClose}
                                        visible={visible}
                                    >
                                        <p>
                                            {/* <Link to="/">Home</Link> */}
                                            <a href="/">Home</a>
                                        </p>
                                        <p>
                                            {/* <Link to="/covids">Covids</Link> */}
                                            <a href="/covids">Covids</a>
                                        </p>
                                        <p>
                                            {/* <Link to="/cryptos">Crypto</Link> */}
                                            <a href="/cryptos">Cryptos</a>
                                        </p>
                                        <p>
                                            {/* <Link to="/games">Games</Link> */}
                                            <a href="/games">Games</a>
                                        </p>
                                        <p>
                                            {/* <Link to="/mangas">Mangas</Link> */}
                                            <a href="/mangas">Mangas</a>
                                        </p>
                                        <p>
                                            {/* <Link to="/movies">Movies</Link> */}
                                            <a href="/movies">Movies</a>
                                        </p>
                                    </Drawer>
                                </Router>
                            </MovieProvider>
                        </MangaProvider>
                    </GameProvider>
                </CryptoProvider>
            </CovidProvider>
        </>
    );
}
