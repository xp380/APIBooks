import React, { useState } from "react";
import Details from "./Details";
import { Card, Row, Tag } from "antd";

const Main = React.memo((props) => {
    const [isHovering, setIsHovering] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
        return (
            <div
                style={hov}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <img src={background_image} alt="#" width="200" height="200" />
            </div>
        );
    };

    const HoverText = () => {
        return (
            <div className="test" style={test}>
                CLICK ME
            </div>
        );
    };

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const { id, slug, rating, background_image, tags } = props;

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

    const hov = { marginLeft: 25 };
    const test = {
        width: 90,
        marginLeft: 80,
        marginTop: 10,
        fontWeight: "bolder",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "10px"
    };

    const tag = { textAlign: "left", fontWeight: "bold" };
    const rate = { float: "right" };
    const image = { marginLeft: 25 };
    const genre = { fontWeight: "bold" };
    return (
        <>
            <Row>
                <Card
                    key={id}
                    style={styles}
                    bordered={true}
                    onClick={handleClickOpen}
                >
                    <div>
                        <h3 style={tag}>
                            {slug}
                            <span style={rate}>{rating}</span>
                        </h3>
                    </div>

                    <p style={genre}>Genres: </p>
                    {tags.map((data) => {
                        if (data.id === 31) {
                            return <Tag color="blue"> {data.name} </Tag>;
                        } else if (data.id === 4) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.id === 51) {
                            return <Tag color="default"> {data.name} </Tag>;
                        } else if (data.id === 3) {
                            return <Tag color="error"> {data.name} </Tag>;
                        } else if (data.id === 5) {
                            return <Tag color="geekblue"> {data.name} </Tag>;
                        } else if (data.id === 10) {
                            return <Tag color="gold"> {data.name} </Tag>;
                        } else if (data.id === 2) {
                            return <Tag color="green"> {data.name} </Tag>;
                        } else if (data.id === 40) {
                            return <Tag color="lime"> {data.name} </Tag>;
                        } else if (data.id === 14) {
                            return <Tag color="magenta"> {data.name} </Tag>;
                        } else if (data.id === 7) {
                            return <Tag color="volcano"> {data.name} </Tag>;
                        } else if (data.id === 11) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.id === 83) {
                            return <Tag color="red"> {data.name} </Tag>;
                        } else if (data.id === 1) {
                            return <Tag color="purple"> {data.name} </Tag>;
                        } else if (data.id === 59) {
                            return <Tag color="processing"> {data.name} </Tag>;
                        } else if (data.id === 15) {
                            return <Tag color="pink"> {data.name} </Tag>;
                        } else if (data.id === 6) {
                            return <Tag color="warning"> {data.name} </Tag>;
                        } else if (data.id === 19) {
                            return <Tag color="yellow"> {data.name} </Tag>;
                        } else if (data.id === 28) {
                            return <Tag color="blue"> {data.name} </Tag>;
                        } else if (data.id === 34) {
                            return <Tag color="cyan"> {data.name} </Tag>;
                        } else if (data.id === 17) {
                            return <Tag color="gold"> {data.name} </Tag>;
                        }
                    })}
                    <HoverableDiv
                        handleMouseOver={handleMouseOver}
                        handleMouseOut={handleMouseOut}
                    />
                    {isHovering && <HoverText />}
                </Card>
                <Details
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    detailsData={props}
                />
            </Row>
        </>
    );
});

export default Main;
