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
    const image = { marginLeft: 150 };
    return (
        <Row gutter={16}>
            {cryptoSearched.map((item, id) => (
                <Card
                    key={id}
                    style={styles}
                    bordered={true}
                    // onClick={handleClickOpen}
                >
                    <div>
                        <img
                            src={item.image}
                            alt="Smiley face"
                            height="42"
                            width="42"
                            style={image}
                        ></img>
                        <Divider />
                        <p>Rank:{item.market_cap_rank}</p>
                        <p>Nom:{item.name}</p>
                        <p>Prix actuel: {item.current_price}</p>
                        <p>Volume:{item.total_volume}</p>
                        {/* {new Date(airing_start).toLocaleDateString("en-GB")} */}
                        <p>
                            Date:{" "}
                            {new Date(item.atl_date).toLocaleDateString(
                                "en-GB"
                            )}
                        </p>
                    </div>
                </Card>
            ))}
        </Row>
    );
};

export default Covids;
