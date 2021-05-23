import React from 'react'
import { Card, Row, } from 'antd'

export const Covid = ({ covid }) => {
    const { Confirmed, Deaths, Recovered, Active, Date, Country } = covid;

    return (
        <>
            <Row gutter={16}>
                <Card title={Country} style={{ width: 300, margin: "1,5%" }} bordered={true} hoverable >
                    <p>Confirmés: {Confirmed}</p>
                    <p>Morts: {Deaths}</p>
                    <p>Rétablis: {Recovered}</p>
                    <p>Active: {Active}</p>
                    <p>Date: {Date}</p>
                </Card>
            </Row>

        </>
    )
}