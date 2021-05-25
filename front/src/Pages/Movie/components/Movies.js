import React, { useContext } from 'react'
import { MovieContext } from '../Context';
import { Card, Row, Tag } from 'antd'

const Movies = () => {
    const { movies } = useContext(MovieContext)
    return (
        <Row gutter={16}>
            {movies.slice(0, 1).map((item, id) => (
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }} bordered={true}
                    hoverable
                >
                    <div>
                        <p style={{ textAlign: "left" }}>{item.title} <span style={{ float: "right" }}>{item.vote_average}</span></p>
                    </div>
                    <p><img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="#" width="200" height="200" /></p>
                    <Tag color={"red"}> {item.title}</Tag>
                </Card>
            ))}
        </Row >
    )
}

export default Movies