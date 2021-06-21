import React, { useState } from "react";
import Details from './Details'
import { Card, Row, Tag, Button } from "antd";

const Main = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { id, slug, rating, background_image, tags } = props;
    return (
        <>
            <Row gutter={16}>
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }}
                    bordered={true}
                    hoverable
                >
                    <div>
                        <p style={{ textAlign: "left" }}>
                            {slug}
                            <span style={{ float: "right" }}>
                                {rating}
                            </span>
                        </p>
                    </div>
                    <img
                        src={background_image}
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
