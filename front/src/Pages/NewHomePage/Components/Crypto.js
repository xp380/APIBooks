import React, { useContext } from "react";
import { Card, Row, Col } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";

export default function Crypto() {
    const { cryptoMoney } = useContext(GlobalContext);
    const history = useHistory();
    function HandleHistory() {
        history.push("./cryptos");
    }

    const card = { width: 700 };
    return (
        <>
            <Card bordered={true} onClick={HandleHistory} style={card}>
                <h3 style={{ textAlign: "center" }}>
                    Les crypto les plus recherchées depuis 24h
                </h3>
                <Row gutter={16}>
                    <ol>
                        {cryptoMoney.slice(0, 3).map((data) => (
                            <li>
                                <img alt="#" src={data.item.small}></img>
                                <span style={{ marginLeft: 10 }}>
                                    {data.item.name}
                                </span>
                                <span style={{ marginLeft: 20 }}>
                                    {data.item.price_btc}
                                </span>
                                <span style={{ marginLeft: 20 }}>
                                    Rank du marché:{data.item.market_cap_rank}
                                </span>
                                {/* </div> */}
                            </li>
                        ))}
                    </ol>
                </Row>
            </Card>
        </>
    );
}
