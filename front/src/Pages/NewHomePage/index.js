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
                <p
                    style={{
                        marginTop: 80,
                        marginLeft: 150,
                        display: "flex",
                        borderSpacing: 5
                    }}
                >
                    <p style={{ marginRight: 10 }}>
                        <Covid />
                    </p>
                    <span style={{ marginLeft: 50 }}>
                        <Crypto />
                    </span>
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
