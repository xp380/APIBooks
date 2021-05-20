import React from 'react'
import { Card, Col, Row, } from 'antd'

export const Covid = ({ covid }) => {
    const { Confirmed, Deaths, Recovered, Active, Date, Country } = covid;

    return (
        <>
            <Row gutter={16}>
                <Col span={6} >
                    <Card title={Country} style={{ width: 300 }} bordered={true} hoverable >
                        <p>Confirmés: {Confirmed}</p>
                        <p>Morts: {Deaths}</p>
                        <p>Rétablis: {Recovered}</p>
                        <p>Active: {Active}</p>
                        <p>Date: {Date}</p>
                    </Card>
                </Col>
                <Col span={6} >
                    <Card title={Country} style={{ width: 300 }} bordered={true} hoverable >
                        <p>Confirmés: {Confirmed}</p>
                        <p>Morts: {Deaths}</p>
                        <p>Rétablis: {Recovered}</p>
                        <p>Active: {Active}</p>
                        <p>Date: {Date}</p>
                    </Card>
                </Col>
            </Row>

        </>
    )
}