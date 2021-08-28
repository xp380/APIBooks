import React, { useState } from "react";
import { Card, Row } from "antd";
import Details from "./Details";

const Movies = React.memo((props) => {
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
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt="#"
                    width="200"
                    height="200"
                />
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

    const { poster_path, title, vote_average, popularity, id } = props;

    const randomColorGenerator = () => {
        let charChoices = "1234567890abcdef".split("");
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 16 + 1);
            color += charChoices[randomIndex];
        }
        return color;
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

    const styles = {
        backgroundColor: randomColorGenerator(),
        width: 300,
        margin: 10,
        transition: "1s",
        boxShadow: "0 8px 16px 0 black",
        borderRadius: "60px"
    };

    const titre = {
        textAlign: "left",
        fontFamily: "Impact, fantasy"
    };

    const vote = {
        float: "right",
        fontFamily: "Impact, fantasy"
    };
    const pop = { fontFamily: "Impact, fantasy" };
    return (
        <Row>
            <Card
                style={styles}
                bordered={true}
                key={id}
                onClick={handleClickOpen}
            >
                <div>
                    <p style={titre}>
                        {title} <span style={vote}>note:{vote_average}</span>
                    </p>
                    <p style={pop}>Popularité: {popularity}</p>
                </div>
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
    );
});

export default Movies;
