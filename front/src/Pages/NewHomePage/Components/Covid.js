import React, { useContext } from "react";
import { Card, Row, Col } from "antd";
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
                    <h3 style={{ textAlign: "center" }}>
                        Bilan du covid en France <br /> {data.Date}
                    </h3>
                ))}
                {covidDelta.slice(580, 581).map((data) => (
                    <Row gutter={18}>
                        <Col style={{ color: "orange" }}>
                            Confirmés:{data.Confirmed}
                        </Col>
                        <Col style={{ color: "red" }}>Morts:{data.Deaths}</Col>
                        <Col style={{ color: "green" }}>
                            rétablis:{data.Recovered}
                        </Col>
                    </Row>
                ))}
            </Card>
        </>
    );
}
