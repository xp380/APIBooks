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

    const styles = {
        width: 300,
        margin: 10
    };
    return (
        <>
            <Card bordered={true} onClick={HandleHistory}>
                {cryptoMoney.map((data) => {
                    return <Tag color="blue">{data.name} </Tag>;
                })}
            </Card>
        </>
    );
}
