import React, { useContext } from 'react'
import { MangaContext } from '../Context'

import { Card, Row } from 'antd'

const Main = () => {
    const { datas } = useContext(MangaContext)
    return (
        <>
            <Row gutter={16}>
                {datas.map((item, mal_id) => (
                    <Card key={mal_id}
                        style={{ width: 300, margin: 10 }}
                        bordered={true}
                        hoverable
                    >
                        <div>
                            <p style={{ textAlign: "left" }}>{item.title} <span style={{ float: "right" }}>{item.score}</span></p>
                        </div>
                        <p><img src={item.image_url} alt="#" width="200" height="200" /></p>
                    </Card>
                ))}
            </Row>
        </>
    )
}

export default Main