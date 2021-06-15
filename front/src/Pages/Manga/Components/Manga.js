import React, { useContext, useState } from "react";
import { MangaContext } from "../Context";
import Details from "./Details";

import { Card, Row, Tag, Button } from "antd";

const Main = React.memo(() => {
    const { sortedMangas } = useContext(MangaContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Row gutter={16}>
                {sortedMangas.map((item, mal_id) => (
                    <Card
                        key={mal_id}
                        style={{ width: 300, margin: 10 }}
                        bordered={true}
                        hoverable
                    >
                        <div>
                            <p style={{ textAlign: "left" }}>
                                {item.title}{" "}
                                <span style={{ float: "right" }}>
                                    {item.score}
                                </span>
                            </p>
                        </div>
                        <p>
                            <img
                                src={item.image_url}
                                alt="#"
                                width="200"
                                height="200"
                            />
                            <Button
                                onClick={handleClickOpen}
                                variant="contained"
                                size="middle"
                                style={{ marginLeft: "50px" }}
                            >
                                Details
                            </Button>
                            <p>Genres: </p>
                            {item.genres.map((data) => {
                                if (data.mal_id === 1) {
                                    return (
                                        <Tag color="blue"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 2) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 3) {
                                    return (
                                        <Tag color="default"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 4) {
                                    return (
                                        <Tag color="error"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 5) {
                                    return (
                                        <Tag color="geekblue">{data.name}</Tag>
                                    );
                                } else if (data.mal_id === 6) {
                                    return (
                                        <Tag color="gold"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 7) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 8) {
                                    return (
                                        <Tag color="lime"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 9) {
                                    return (
                                        <Tag color="magenta"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 10) {
                                    return (
                                        <Tag color="volcano"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 11) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 12) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.mal_id === 13) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 14) {
                                    return (
                                        <Tag color="processing">
                                            {data.name}
                                        </Tag>
                                    );
                                } else if (data.mal_id === 15) {
                                    return (
                                        <Tag color="pink"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 16) {
                                    return (
                                        <Tag color="warning"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 17) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 18) {
                                    return (
                                        <Tag color="blue"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 19) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 20) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.mal_id === 21) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 22) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 23) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 24) {
                                    return (
                                        <Tag color="black"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 25) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 26) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.mal_id === 27) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 28) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 29) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 30) {
                                    return (
                                        <Tag color="black"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 31) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 32) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.mal_id === 33) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 34) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 35) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 36) {
                                    return (
                                        <Tag color="black"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 37) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 38) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.mal_id === 39) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 40) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 41) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 42) {
                                    return (
                                        <Tag color="black"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 43) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 44) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.mal_id === 45) {
                                    return (
                                        <Tag color="black"> {data.name} </Tag>
                                    );
                                }
                            })}
                        </p>
                    </Card>
                ))}
                <Details
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    detailsData={sortedMangas}
                />
            </Row>
        </>
    );
});

export default Main;
