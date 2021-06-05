import React, { useState, useContext } from 'react'
import { CovidContext } from '../Context'
import { Card, Row, Button, Modal } from 'antd'
import GraphSelected from './GraphSelected'
// import Details from './Details'

export const TestCovid = (props) => {
    const { covids } = useContext(CovidContext);
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const { Confirmed, Deaths, Recovered, Date } = props
    return (
        <Row gutter={16}>
            {covids.map((item, id) => (
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }} bordered={true}
                    hoverable
                >
                    <p>
                        NB de Confirmés: {item.Confirmed}
                        <br />
                        NB de décès: {item.Deaths}
                        <br />
                        NB de Rétablis: {item.Recovered}
                        <br />
                        Date: {item.Date}
                    </p>
                    <Button onClick={handleClickOpen} variant="contained" size='middle' style={{ marginLeft: "50px" }}>
                        Details
                    </Button>
                </Card>
            ))}
            <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
                <GraphSelected
                    detailsData={props}
                />
            </Modal>
        </Row>
    )
}
export default TestCovid