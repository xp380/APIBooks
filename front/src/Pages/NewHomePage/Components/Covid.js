import React, { useContext } from "react";
import { Card, Row, Tag } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";

export default function Covid() {
    const { covidDelta } = useContext(GlobalContext);
    const history = useHistory();
    console.log(covidDelta);

    const card = { width: 400 };

    function HandleRoute() {
        history.push("/covids");
    }

    return (
        <>
            <Card bordered={true} style={card}>
                {covidDelta.slice(580, 581).map((data) => (
                    <>
                        <h3 style={{ textAlign: "center" }}>
                            Statistiques du jour
                        </h3>
                        <p>Nb de confirmés:{data.Confirmed}</p>

                        <p>Nb de Morts:{data.Deaths}</p>

                        <p>Nb de rétablis:{data.Recovered}</p>
                        <p>Date: {data.Date}</p>
                    </>
                ))}
            </Card>
        </>
    );
}
