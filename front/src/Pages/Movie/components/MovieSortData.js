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

    return (
        <Row >
            <Card
                style={{ width: 300, margin: 10 }}
                bordered={true}
                key={id}
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
                <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    size="middle"
                    style={{ marginLeft: "50px" }}
                >
                    Details
                </Button>
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
