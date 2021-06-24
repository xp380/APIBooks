import React, { useState } from "react";
import { Card } from "antd";
import GraphSelected from './GraphSelected'


const CovidSort = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { id, Confirmed, Deaths, Recovered, Date, Country, Active } = props;
    return (
        <>
            <Card
                key={id}
                style={{ width: 300, margin: 10, backgroundColor: "yellow" }}
                bordered={true}
                hoverable
                onClick={handleClickOpen}
            >
                <div>
                    <h3 style={{ textAlign: 'center' }}>{Country}</h3>
                    <p style={{ textAlign: 'center' }}>{Date}</p>
                    <p style={{ color: "black", backgroundColor: "red" }}>Active :{Active}</p>
                    <p style={{ color: "white", backgroundColor: "black" }}>Morts:{Deaths}</p>
                    <p style={{ color: "white", backgroundColor: "blue" }}>Rétablis:{Recovered}</p>
                    <p style={{ color: 'black', backgroundColor: "orangered" }}>Confirmés:{Confirmed}</p>

                </div>

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
