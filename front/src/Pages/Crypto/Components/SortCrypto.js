import React, { useState } from "react";
import { CryptoContext } from "../Context";
import { Card, Row, Button } from "antd";
import GraphSelected from './GraphSelected'

const CryptoSort = React.memo((props) => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const { id, total_volume, current_price, last_updated, name, image } = props
    return (
        <Row gutter={16}>
            <Card
                key={id}
                style={{ width: 300, margin: 10 }}
                bordered={true}
                hoverable
            >
                <p>
                    Quantité totale: {total_volume}
                    <br />
                    Prix actuel: {current_price}
                    <br />
                    Last updated: {last_updated}
                    <br />
                    Nom: {name}
                    <br />
                    <img
                        src={image}
                        alt="Smiley face"
                        height="42"
                        width="42"
                    ></img>
                    <Button
                        onClick={handleClickOpen}
                        variant="contained"
                        size="middle"
                        style={{ marginLeft: "50px" }}
                    >
                        Details
                    </Button>
                </p>
                <GraphSelected
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    detailsData={props}
                />
            </Card>
        </Row>
    );
});

export default CryptoSort;
