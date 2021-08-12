import React, { useContext } from "react"
import { Statistic, Card, Row, Col } from "antd"
import { GlobalContext } from "../Context"
import { useHistory } from "react-router";


export default function Covid() {
    const { covidDelta } = useContext(GlobalContext)
    const history = useHistory();

    function HandleRoute() {
        history.push("/covids")
    }

    return (
        <>
            <Row gutter={16}>
                {covidDelta.map((id, item) => {
                    return (
                        <Card key={id}>
                            <>
                                Pays: {item.Country}
                            </>
                        </Card>
                    )
                })}

            </Row>
        </>
    )
}