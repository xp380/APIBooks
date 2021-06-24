import React, { useState } from "react";
import { Card, Row, Button } from "antd";
import Details from './Details'

const Movies = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { poster_path, title, vote_average, popularity, id } = props;

    const randomColorGenerator = () => {
        let charChoices = '1234567890abcdef'.split('');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 16 + 1);
            color += charChoices[randomIndex];
        }
        return color;
    };

    const styles = {
        backgroundColor: randomColorGenerator(),
        width: 300,
        margin: 10
    };

    return (
        <Row >
            <Card
                style={styles}
                bordered={true}
                key={id}
                onClick={handleClickOpen}
            >
                <div>
                    <p style={{ textAlign: "left" }}>
                        {title}{" "}
                        <span style={{ float: "right" }}>
                            note:{vote_average}
                        </span>
                    </p>
                    <p>Popularité: {popularity}</p>
                </div>
                <p>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt="#"
                        width="200"
                        height="200"
                    />
                </p>
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
