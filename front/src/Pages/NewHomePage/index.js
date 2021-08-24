import { Row } from "antd";
import React from "react";
import Covid from "./Components/Covid";
import Crypto from "./Components/Crypto";
import Game from "./Components/Game";
import Manga from "./Components/Manga";
import Movie from "./Components/Movie";

const styles = {
    marginTop: 80
};
export default function NewHome() {
    return (
        <>
            <Row>
                {/* <p>
                    <Covid />
                </p> */}
                <p style={{ marginTop: 80, marginLeft: 700 }}>
                    <Crypto />
                </p>
            </Row>
            <p style={styles}>
                <Game />
            </p>
            <p style={styles}>
                <Manga />
            </p>
            <p style={styles}>
                <Movie />
            </p>
        </>
    );
}
