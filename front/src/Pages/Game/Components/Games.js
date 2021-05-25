import React, { useContext } from "react"
import { GameContext } from "../Context"
import { Card, Row } from "antd"


const Games = () => {
    const { games } = useContext(GameContext)
    return (
        <Row gutter={16}>

        </Row>
    )
}

export default Games