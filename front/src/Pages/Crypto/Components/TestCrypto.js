import React, { useState } from 'react'
import { Card, Row, Button } from 'antd'
import GraphSelected from './GraphSelected'

export const TestCrypto = (props) => {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClickClose = () => {
        setOpen(false)
    }
    const { mal_id, total_volume, current_price, last_updated, name, image } = props
    return (
        <Row gutter={16}>
            <Card key={mal_id} style={{ width: 300, margin: 10 }} bordered={true} hoverable >
                <p>
                    Quantité totale: {total_volume}
                    <br />
                    Prix actuel: {current_price}
                    <br />
                    Last updated: {last_updated}
                    <br />
                    Nom: {name}
                    <br />
                    <img src={image} alt="Smiley face" height="42" width="42"></img>
                </p>
                <Button onClick={handleClickOpen} size="middle" style={{ marginLeft: "50px" }}>
                    Details
                </Button>
            </Card>
            <GraphSelected
                open={open}
                handleClickOpen={handleClickOpen}
                handleClickClose={handleClickClose}
                detailsData={props}
            />
        </Row >
    )
}

export default TestCrypto