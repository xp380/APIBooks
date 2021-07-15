import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

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
                    <p>
                        <a href="/">Home</a>
                    </p>
                    <p>
                        <a href="/covids">Covids</a>
                    </p>
                    <p>
                        <a href="/cryptos">Cryptos</a>
                    </p>
                    <p>
                        <a href="/games">Games</a>
                    </p>
                    <p>
                        <a href="/mangas">Mangas</a>
                    </p>
                    <p>
                        <a href="/movies">Movies</a>
                    </p>
                </Drawer>
            </Router>
        </>
    );
}
