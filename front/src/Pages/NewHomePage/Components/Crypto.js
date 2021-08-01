import React, { useContext } from "react"
import { Statistic, Card, Row } from "antd"
import { GlobalContext } from "../Context"
import { useHistory } from "react-router"

export default function Crypto() {
    const { cryptoMoney } = useContext(GlobalContext)
    const history = useHistory()
    function HandleHistory() {
        history.push('./cryptos')
    }

    const styles = {
        width: 300,
        margin: 10,
    }
    return (
        <>
            <Row gutter={16}>
                {cryptoMoney.map((mal_id, item) => (
                    <Card
                        style={styles}
                        key={mal_id}
                        bordered={true}
                        onClick={HandleHistory}
                    >
                        <p>
                            Name: {item.name}
                        </p>
                    </Card>

                ))}
            </Row>
        </>
    )
}