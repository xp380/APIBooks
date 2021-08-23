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
    const image = {
        width: 50,
        height: 50,
        marginLeft: 30
    };
    const space = { marginLeft: 2 };
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
                    <p style={space}>
                        <a href="/">Home</a>
                        <img style={image} src={Home} alt="logo"></img>
                    </p>
                    <p>
                        <a href="/covids">Covids</a>
                        <img style={image} src={Covid} alt="logo"></img>
                    </p>
                    <p>
                        <a href="/cryptos">Cryptos</a>
                        <img style={image} src={Crypto} alt="logo"></img>
                    </p>

                    <p>
                        <a href="/games">Games</a>
                        <img style={image} src={Games} alt="logo"></img>
                    </p>
                    <p>
                        <a href="/mangas">Mangas</a>
                        <img style={image} src={Manga} alt="logo"></img>
                    </p>
                    <p>
                        <a href="/movies">Movies</a>
                        <img style={image} src={Movie} alt="logo"></img>
                    </p>
                    <p>
                        <a href="/newHome">New HomePage</a>
                        <img style={image} src={Home} alt="logo"></img>
                    </p>
                </Drawer>
            </Router>
        </>
    );
}
