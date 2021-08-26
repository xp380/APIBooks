import React, { useContext } from "react";
import { Card, Tag } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";

export default function Crypto() {
    const { cryptoMoney } = useContext(GlobalContext);
    const history = useHistory();
    function HandleHistory() {
        history.push("./cryptos");
    }

    const card = { width: 400 };
    return (
        <>
            <Card bordered={true} onClick={HandleHistory} style={card}>
                {cryptoMoney.slice(0, 3).map((data) => (
                    <>
                        <p>
                            <img alt="#" src={data.item.small}></img>
                            {data.item.name}

                            {data.item.price_btc}

                            {data.item.market_cap_rank}
                        </p>
                        {/* <ol>
                            <li>
                                <p>{data.item.name}</p>
                                <img alt="#" src={data.item.small}></img>
                            </li>
                            <p>{data.item.price_btc}</p>
                            <p>{data.item.market_cap_rank}</p>
                        </ol> */}
                    </>
                ))}
            </Card>
        </>
    );
}
