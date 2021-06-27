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

    const { id, Confirmed, Deaths, Recovered, Date, Country, Active } = props;
    return (
        <>
            <Card
                key={id}
                style={styles}
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
