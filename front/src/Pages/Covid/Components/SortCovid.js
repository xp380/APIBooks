import React, { useState } from "react";
import { Card, Button } from "antd";
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
            <Card
                key={id}
                style={{ width: 300, margin: 10 }}
                bordered={true}
                hoverable
                onClick={handleClickOpen}
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

            </Card>
            <GraphSelected
                open={open}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                detailsData={props}
            />
        </>
    );
});

export default CovidSort;
