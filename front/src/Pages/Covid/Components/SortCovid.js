import React, { useState } from "react";
import { Card } from "antd";
import GraphSelected from "./GraphSelected";

const CovidSort = React.memo((props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const randomColorGenerator = () => {
        let charChoices = "1234567890abcdef".split("");
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 16 + 1);
            color += charChoices[randomIndex];
        }
        return color;
    };

    const styles = {
        backgroundColor: randomColorGenerator(),
        width: 300,
        margin: 10,
        transition: "1s",
        boxShadow: "0 8px 16px 0 black",
        borderRadius: "60px"
    };
    const country = { textAlign: "center", border: "solid" };
    const date = { textAlign: "center", fontWeight: "bold" };
    const active = {
        fontFamily: "monospace",
        fontWeight: "bold"
    };
    const deaths = {
        fontFamily: "emoji",
        fontWeight: "bold"
    };
    const recovered = {
        fontFamily: "math",
        fontWeight: "bold"
    };
    const confirmed = {
        fontFamily: "fantasy",
        fontWeight: "bold"
    };
    const { id, Confirmed, Deaths, Recovered, Date, Country, Active } = props;
    return (
        <>
            <Card
                key={id}
                style={styles}
                bordered={true}
                onClick={handleClickOpen}
            >
                <div>
                    <h3 style={country}>{Country}</h3>
                    <p style={date}>{Date}</p>
                    <p style={active}>Active:{Active}</p>
                    <p style={deaths}>Morts:{Deaths}</p>
                    <p style={recovered}>Rétablis:{Recovered}</p>
                    <p style={confirmed}>Confirmés:{Confirmed}</p>
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
