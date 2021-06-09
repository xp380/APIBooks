import React, { useContext } from "react";
import { CryptoContext } from "../Context";
import { Card, Row } from "antd";

const CryptoSort = () => {
    const { sortedCrypto } = useContext(CryptoContext);

    return (
        <Row gutter={16}>
            {sortedCrypto.map((crypto, id) => (
                <Card
                    key={id}
                    style={{ width: 300, margin: 10 }}
                    bordered={true}
                    hoverable
                >
                    <p>
                        Quantité totale: {crypto.total_volume}
                        <br />
                        Prix actuel: {crypto.current_price}
                        <br />
                        Last updated: {crypto.last_updated}
                        <br />
                        Nom: {crypto.name}
                        <br />
                        <img
                            src={crypto.image}
                            alt="Smiley face"
                            height="42"
                            width="42"
                        ></img>
                    </p>
                </Card>
            ))}
        </Row>
    );
};

export default CryptoSort;
