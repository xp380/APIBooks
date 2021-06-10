import React, { useContext } from "react";
import { CovidContext } from "../Context";
import { Card, Row } from "antd";

const CovidSort = () => {
    const { sortedCovid } = useContext(CovidContext);

    return (
        <>
            <Row gutter={16}>
                {sortedCovid.map((covid, id) => (
                    <Card
                        key={id}
                        style={{ width: 300, margin: 10 }}
                        bordered={true}
                        hoverable
                    >
                        <p>
                            NB de Confirmés: {covid.Confirmed}
                            <br />
                            NB de décès: {covid.Deaths}
                            <br />
                            NB de Rétablis: {covid.Recovered}
                            <br />
                            Date: {covid.Date}
                        </p>
                    </Card>
                ))}
            </Row>
        </>
    );
};

export default CovidSort;
