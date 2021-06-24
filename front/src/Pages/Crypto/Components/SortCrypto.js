import React, { useState } from "react";
import { Card, Row, Divider } from "antd";
import GraphSelected from './GraphSelected'

const CryptoSort = React.memo((props) => {

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const { id, total_volume, current_price, atl_date, name, image, market_cap_rank, last_updated } = props

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
                key={id}
                style={styles}
                bordered={true}
                hoverable
                onClick={handleClickOpen}
            >
                <div>
                    <img
                        src={image}
                        alt="Smiley face"
                        height="42"
                        width="42"
                        style={{ marginLeft: 100 }}
                    ></img>
                    <Divider />
                    <p >Rank:{market_cap_rank}</p>
                    <p >Nom:{name}</p>
                    <p >Prix actuel: {current_price}</p>
                    <p>Volume:{total_volume}</p>
                    <p>Date: {atl_date}</p>
                </div>
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
