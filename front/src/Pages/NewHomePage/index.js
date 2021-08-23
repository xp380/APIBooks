import React from "react";
import Covid from "./Components/Covid";
import Crypto from "./Components/Crypto";
import Game from "./Components/Game";
import Manga from "./Components/Manga";
import Movie from "./Components/Movie";

import { Row } from "antd";

export default function NewHome() {
    return (
        <>
            {/* <Row>
                <Covid />
            </Row> */}
            {/* <p style={{ marginTop: 80 }}>
                <Crypto />
            </p> */}
            <p style={{ marginTop: 80 }}>
                <Game />
            </p>
            <p style={{ marginTop: 80 }}>
                <Manga />
            </p>
            <p style={{ marginTop: 80 }}>
                <Movie />
            </p>
        </>
    );
}
