import React, { useState} from 'react'
import { Card, Row, Button } from 'antd'
import Details from './Details'

export default function ModalGame(props) {
    const [open, setOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    } 
    const { name, id, rating, background_image } = props;
    return(
        <Row gutter={16}>
        <Card key={id} style={{ width: 300, margin: 10 }} bordered={true} title={name}>
          <div>
            <p style={{ textAlign: "left" }}>{name} <span style={{ float: "right" }}>{rating}</span></p>
          </div>
          <img src={background_image} alt="#" width="200" height="200" />
            <Button onClick={handleClickOpen} variant="contained" size='middle' style={{marginLeft: "50px"}}>
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
    )
}