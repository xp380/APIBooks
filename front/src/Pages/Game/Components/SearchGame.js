import React, { useContext } from "react";
import { GameContext } from "../Context";
import { Card, Row, Tag } from "antd";

const Games = () => {
    const { games } = useContext(GameContext);

    const row = { marginLeft: 70 };
    const card = { width: 400, margin: 10 };
    const slug = { textAlign: "left" };
    const rating = { float: "right" };
    const image = { marginLeft: 25 };
    return (
        <Row style={row}>
            {games.slice(0, 3).map((item, id) => (
                <Card key={id} style={card} bordered={true}>
                    <div>
                        <p style={slug}>
                            {item.slug}{" "}
                            <span style={rating}>{item.rating}</span>
                        </p>
                    </div>
                    <p style={image}>
                        <img
                            src={item.background_image}
                            alt="#"
                            width="300"
                            height="200"
                        />
                    </p>
                    <p>Genres:</p>

                    {item.tags.map((data) => {
                        // if (data.id === 31) {
                        //     return <Tag color="blue"> {data.name} </Tag>;
                        // } else if (data.id === 4) {
                        //     return <Tag color="cyan"> {data.name} </Tag>;
                        // } else if (data.id === 51) {
                        //     return <Tag color="default"> {data.name} </Tag>;
                        // } else if (data.id === 3) {
                        //     return <Tag color="error"> {data.name} </Tag>;
                        // } else if (data.id === 5) {
                        //     return <Tag color="geekblue"> {data.name} </Tag>;
                        // } else if (data.id === 10) {
                        //     return <Tag color="gold"> {data.name} </Tag>;
                        // } else if (data.id === 2) {
                        //     return <Tag color="green"> {data.name} </Tag>;
                        // } else if (data.id === 40) {
                        //     return <Tag color="lime"> {data.name} </Tag>;
                        // } else if (data.id === 14) {
                        //     return <Tag color="magenta"> {data.name} </Tag>;
                        // } else if (data.id === 7) {
                        //     return <Tag color="volcano"> {data.name} </Tag>;
                        // } else if (data.id === 11) {
                        //     return <Tag color="yellow"> {data.name} </Tag>;
                        // } else if (data.id === 83) {
                        //     return <Tag color="red"> {data.name} </Tag>;
                        // } else if (data.id === 1) {
                        //     return <Tag color="purple"> {data.name} </Tag>;
                        // } else if (data.id === 59) {
                        //     return <Tag color="processing"> {data.name} </Tag>;
                        // } else if (data.id === 15) {
                        //     return <Tag color="pink"> {data.name} </Tag>;
                        // } else if (data.id === 6) {
                        //     return <Tag color="warning"> {data.name} </Tag>;
                        // } else if (data.id === 19) {
                        //     return <Tag color="yellow"> {data.name} </Tag>;
                        // } else if (data.id === 28) {
                        //     return <Tag color="blue"> {data.name} </Tag>;
                        // } else if (data.id === 34) {
                        //     return <Tag color="cyan"> {data.name} </Tag>;
                        // } else if (data.id === 17) {
                        //     return <Tag color="gold"> {data.name} </Tag>;
                        // }
                        return <Tag color="gold">{data.name}</Tag>;
                    })}
                </Card>
            ))}
        </Row>
    );
};

export default Games;
