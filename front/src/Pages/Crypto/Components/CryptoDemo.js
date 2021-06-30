import React, { useContext } from "react";
import { CryptoContext } from "../Context";
import { Card, Row, Divider } from "antd";

const Covids = () => {
    const { cryptoSearched } = useContext(CryptoContext);

    const randomColorGenerator = () => {
        let charChoices = "1234567890abcdef".split("");
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 16 + 1);
            color += charChoices[randomIndex];
        }
        return color;
    };
    const styles = {
        backgroundColor: randomColorGenerator(),
        width: 400,
        height: 500,
        margin: 10,
        marginLeft: "40%"
    };

    return (
        <Row gutter={16}>
            {cryptoSearched.map((item, id) => (
                <Card
                    key={id}
                    style={styles}
                    bordered={true}
                    hoverable
                    // onClick={handleClickOpen}
                >
                    <div>
                        <img
                            src={item.image}
                            alt="Smiley face"
                            height="42"
                            width="42"
                            style={{ marginLeft: 150 }}
                        ></img>
                        <Divider />
                        <p>Rank:{item.market_cap_rank}</p>
                        <p>Nom:{item.name}</p>
                        <p>Prix actuel: {item.current_price}</p>
                        <p>Volume:{item.total_volume}</p>
                        <p>Date: {item.atl_date}</p>
                    </div>
                </Card>
            ))}
        </Row>
    );
};

export default Covids;
