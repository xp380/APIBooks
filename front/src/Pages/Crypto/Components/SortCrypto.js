import React, { useState } from "react";
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

    const { id, total_volume, current_price, last_updated, name, image, market_cap_rank } = props
    return (
        <Row >
            <Card
                key={id}
                style={{ width: 300, margin: 10 }}
                bordered={true}
                hoverable
                onClick={handleClickOpen}
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
                    Rank: {market_cap_rank}

                    <br />
                    <img
                        src={image}
                        alt="Smiley face"
                        height="42"
                        width="42"
                    ></img>

                </p>
            </Card>
            <GraphSelected
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                detailsData={props}
            />
        </Row>
    );
});

export default CryptoSort;
