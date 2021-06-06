import React, { useState } from 'react'
import { Card, Row, Button } from 'antd'
import Details from './Details'

export default function MoviesTest(props) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const { title, id, vote_average, poster_path } = props;
    return (
        <Row gutter={16}>
            <Card key={id} style={{ width: 300, margin: 10 }} bordered={true} title={title}>
                <div>
                    <p style={{ textAlign: "left" }}>{title} <span style={{ float: "right" }}>{vote_average}</span></p>
                </div>
                <p><img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="#" width="200" height="200" /></p>
                <Button onClick={handleClickOpen} variant="contained" size='middle' style={{ marginLeft: "50px" }}>
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