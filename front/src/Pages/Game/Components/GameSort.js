import React, { useContext } from "react";
import { GameContext } from "../Context";
import { Card, Row } from "antd";

const Games = () => {
    const { sortedGames } = useContext(GameContext);

    return (
        <Row gutter={16}>
            {sortedGames.map((item, id) => (
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }}
                    bordered={true}
                    hoverable
                >
                    <div>
                        <p style={{ textAlign: "left" }}>
                            {item.slug}{" "}
                            <span style={{ float: "right" }}>
                                {item.rating}
                            </span>
                        </p>
                    </div>
                    <img
                        src={item.background_image}
                        alt="#"
                        width="200"
                        height="200"
                    />
                    <p>Métacritique: {item.metacritic}</p>
                    <p>Temps de partie: {item.playtime}</p>
                </Card>
            ))}
        </Row>
    );
};

export default Games;
