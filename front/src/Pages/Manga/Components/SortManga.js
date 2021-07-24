import React, { useState } from "react";
import Details from "./Details";

import { Card, Tag } from "antd";

const Main = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { image_url, mal_id, score, title, genres, episodes } = props;

    const randomColorGenerator = () => {
        let charChoices = "1234567890abcdef".split("");
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 16 + 1);
            color += charChoices[randomIndex];
        }
        return color;
    };

    const styles = {
        backgroundColor: randomColorGenerator(),
        width: 300,
        margin: 10,
        transition: "1s",
        boxShadow: "0 8px 16px 0 black",
        borderRadius: "60px"
    };

    return (
        <>
            <Card
                key={mal_id}
                style={styles}
                bordered={true}
                onClick={handleClickOpen}
            >
                <div>
                    <p
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Impact, fantasy"
                        }}
                    >
                        ID:{mal_id}
                    </p>
                    <h3
                        style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            fontFamily: "Impact, fantasy"
                        }}
                    >
                        {title}
                        <span style={{ float: "right" }}>{score}</span>
                    </h3>
                    <p
                        style={{
                            fontWeight: "bold",
                            fontFamily: "Impact, fantasy"
                        }}
                    >
                        NB episodes: {episodes}
                    </p>
                </div>
                <p>
                    <p style={{ marginLeft: 25 }}>
                        <img src={image_url} alt="#" width="200" height="200" />
                    </p>
                    <p style={{ fontFamily: "Impact, fantasy" }}>Genres: </p>
                    {genres.map((data) => {
                        if (data.mal_id === 1) {
                            return <Tag color="blue"> {data.name} </Tag>;
                        } else if (data.mal_id === 2) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.mal_id === 3) {
                            return <Tag color="default"> {data.name} </Tag>;
                        } else if (data.mal_id === 4) {
                            return <Tag color="error"> {data.name} </Tag>;
                        } else if (data.mal_id === 5) {
                            return <Tag color="geekblue">{data.name}</Tag>;
                        } else if (data.mal_id === 6) {
                            return <Tag color="gold"> {data.name} </Tag>;
                        } else if (data.mal_id === 7) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.mal_id === 8) {
                            return <Tag color="lime"> {data.name} </Tag>;
                        } else if (data.mal_id === 9) {
                            return <Tag color="magenta"> {data.name} </Tag>;
                        } else if (data.mal_id === 10) {
                            return <Tag color="volcano"> {data.name} </Tag>;
                        } else if (data.mal_id === 11) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 12) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.mal_id === 13) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 14) {
                            return <Tag color="processing">{data.name}</Tag>;
                        } else if (data.mal_id === 15) {
                            return <Tag color="pink"> {data.name} </Tag>;
                        } else if (data.mal_id === 16) {
                            return <Tag color="warning"> {data.name} </Tag>;
                        } else if (data.mal_id === 17) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 18) {
                            return <Tag color="blue"> {data.name} </Tag>;
                        } else if (data.mal_id === 19) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.mal_id === 20) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.mal_id === 21) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.mal_id === 22) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 23) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 24) {
                            return <Tag color="black"> {data.name} </Tag>;
                        } else if (data.mal_id === 25) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.mal_id === 26) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.mal_id === 27) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.mal_id === 28) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 29) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 30) {
                            return <Tag color="black"> {data.name} </Tag>;
                        } else if (data.mal_id === 31) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.mal_id === 32) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.mal_id === 33) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.mal_id === 34) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 35) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 36) {
                            return <Tag color="black"> {data.name} </Tag>;
                        } else if (data.mal_id === 37) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.mal_id === 38) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.mal_id === 39) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.mal_id === 40) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 41) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 42) {
                            return <Tag color="black"> {data.name} </Tag>;
                        } else if (data.mal_id === 43) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.mal_id === 44) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.mal_id === 45) {
                            return <Tag color="black"> {data.name} </Tag>;
                        }
                    })}
                </p>
            </Card>
            <Details
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                detailsData={props}
            />
        </>
    );
});

export default Main;
