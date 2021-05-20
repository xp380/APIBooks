import React, { useContext } from 'react'
import { MangaContext } from '../Context'

import { Card, Col, Row } from 'antd'

const Main = () => {
    const { datas } = useContext(MangaContext)
    return (
        <>
            <Row gutter={16}>
                <Col span={6} >
                    {datas.map((item, mal_id) => (
                        <Card key={mal_id} style={{ width: 300 }} bordered={true} hoverable >
                            <p>Titre: {item.title}</p>
                            <p>Note: {item.score}</p>
                            <p><img src={item.image_url} alt="#" width="200" height="200" /></p>
                            <p>Date Début: {item.start_date}</p>
                        </Card>
                    ))}
                </Col>
            </Row>
        </>
    )
}

export default Main