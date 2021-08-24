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

    const card = { width: 600 };
    return (
        <>
            <Card bordered={true} onClick={HandleHistory} style={card}>
                {cryptoMoney.map((data) => (
                    <>
                        <ol>
                            <li>
                                <p>{data.item.name}</p>
                                <img alt="#" src={data.item.small}></img>
                            </li>
                            <p>{data.item.price_btc}</p>
                            {/* <li>{data.item.price_btc}</li> */}
                        </ol>
                    </>
                ))}
            </Card>
        </>
    );
}
