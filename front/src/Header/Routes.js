import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

import Home from "../Pages/Logo/homepage.png";
import Movie from "../Pages/Logo/clapperboard.png";
import Crypto from "../Pages/Logo/bitcoin.png";
import Games from "../Pages/Logo/game-controller.png";
import Covid from "../Pages/Logo/coronavirus.png";
import Manga from "../Pages/Logo/manga.png";

export default function Routes() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const style = { marginLeft: visible ? 210 : 0 };
    return (
        <>
            <Router>
                <Button style={style} type="primary" onClick={showDrawer}>
                    <MenuFoldOutlined />
                </Button>
                <Drawer
                    title="Menu"
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <p style={{ marginLeft: 2 }}>
                        <a href="/">Home</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Home}
                            alt="logo"
                        ></img>
                    </p>
                    <p>
                        <a href="/covids">Covids</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Covid}
                            alt="logo"
                        ></img>
                    </p>
                    <p>
                        <a href="/cryptos">Cryptos</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Crypto}
                            alt="logo"
                        ></img>
                    </p>

                    <p>
                        <a href="/games">Games</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Games}
                            alt="logo"
                        ></img>
                    </p>
                    <p>
                        <a href="/mangas">Mangas</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Manga}
                            alt="logo"
                        ></img>
                    </p>
                    <p>
                        <a href="/movies">Movies</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Movie}
                            alt="logo"
                        ></img>
                    </p>
                    <p>
                        <a href="/newHome">New HomePage</a>
                        <img
                            style={{ width: 50, height: 50, marginLeft: 30 }}
                            src={Home}
                            alt="logo"
                        ></img>
                    </p>
                </Drawer>
            </Router>
        </>
    );
}
