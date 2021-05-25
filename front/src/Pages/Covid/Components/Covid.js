import React, { useContext } from 'react'
import { CovidContext } from '../Context'
import { Card, Row, } from 'antd'

export const Covid = () => {
    const { covids } = useContext(CovidContext);

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
                </Card>
            ))}
        </Row>
    )
}