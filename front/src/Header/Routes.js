import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Progress from "../TestProgress";
// import Search from "../Pages/Movie/components/SearchForm";
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
                    <p>{/* <Search /> */}</p>
                </Drawer>
            </Router>
        </>
    );
}
