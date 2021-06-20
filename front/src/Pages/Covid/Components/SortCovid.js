import React, { useState } from "react";
// import { CovidContext } from "../Context";
import { Card, Row, Button } from "antd";
import GraphSelected from './GraphSelected'


const CovidSort = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { id, Confirmed, Deaths, Recovered, Date, Country } = props;
    return (
        <>
            <Row gutter={16}>
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }}
                    bordered={true}
                    hoverable
                >
                    <p>
                        NB de Confirmés: {Confirmed}
                        <br />
                        NB de décès: {Deaths}
                        <br />
                        NB de Rétablis: {Recovered}
                        <br />
                        Date: {Date}
                        <br />
                        Pays: {Country}
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
                <GraphSelected
                    open={open}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                    detailsData={props}
                />
            </Row>
        </>
    );
});

export default CovidSort;
