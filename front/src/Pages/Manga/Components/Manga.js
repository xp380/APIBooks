import React, { useContext } from 'react'
import { MangaContext } from '../Context'

import { Card, Col, Row } from 'antd'

const Main = () => {
    const { datas } = useContext(MangaContext)
    return (
        <>
            <Row gutter={16}>
                {datas.map((item, mal_id) => (
                    <Card key={mal_id} style={{ width: 300 }} bordered={true} hoverable >
                        <p><img src={item.image_url} alt="#" width="200" height="200" /></p>
                        <p>Titre: {item.title}</p>
                        <p>Note: {item.score}</p>
                        <p>Date Début: {item.start_date}</p>
                        <p>Date Fin: {item.end_date}</p>
                    </Card>
                ))}
            </Row>
        </>
    )
}

export default Main