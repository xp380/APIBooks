import React, { useContext } from "react";
import { MangaContext } from "../Context";
import { Card, Row } from "antd";

const Mangas = () => {
    const { animes } = useContext(MangaContext);
    const row = { marginLeft: 80 };
    const card = { width: 300, margin: 10 };
    const titre = { textAlign: "left" };
    const score = { float: "right" };
    const image = { marginLeft: 25 };
    return (
        <Row style={row}>
            {animes.slice(0, 6).map((item, mal_id) => (
                <Card key={mal_id} style={card} bordered={true}>
                    <div>
                        <p style={titre}>
                            {item.title} <span style={score}>{item.score}</span>
                        </p>
                    </div>
                    <p style={image}>
                        <img
                            src={item.image_url}
                            alt="#"
                            width="200"
                            height="200"
                        />
                    </p>
                </Card>
            ))}
        </Row>
    );
};

export default Mangas;
