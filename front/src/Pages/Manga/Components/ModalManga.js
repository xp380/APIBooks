import React, { useState } from "react";
import { Card, Row, Button } from "antd";
import Details from "./Details";

export default function ModalManga(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { image_url, mal_id, score, title } = props;
    return (
        <Row gutter={16}>
            <Card
                key={mal_id}
                style={{ width: 300, margin: 10 }}
                bordered={true}
            >
                <div>
                    <p style={{ textAlign: "left" }}>
                        {title} <span style={{ float: "right" }}>{score}</span>
                    </p>
                </div>
                <p>
                    <img src={image_url} alt="#" width="200" height="200" />
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
}
