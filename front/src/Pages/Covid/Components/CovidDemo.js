import React, { useContext } from "react";
import { CovidContext } from "../Context";
import { Card, Row } from "antd";

const Covids = () => {
    const { covidSearched } = useContext(CovidContext);
    return (
        <Row style={{ marginLeft: 70 }}>
            {covidSearched.map((item, id) => (
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }}

                    bordered={true}
                    loading={true}
                >
                    <p>
                        NB de Confirmés: {item.Confirmed}
                        <br />
                        NB de décès: {item.Deaths}
                        <br />
                        NB de Rétablis: {item.Recovered}
                        <br />
                        Date: {item.Date}
                        <br />
                        Pays: {item.Country}
                    </p>
                </Card>
            ))}
        </Row>
    );
};

export default Covids;
