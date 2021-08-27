import React, { useContext } from "react";
import { Carousel, Button } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export default function Game() {
    const { gamePlay } = useContext(GlobalContext);
    const history = useHistory();

    function HandleHistory() {
        history.push("./games");
    }
    // const RightArrow = () => {
    //     return (
    //         <Button
    //             style={{ padding: "1rem", height: "auto", width: "auto" }}
    //             icon={<RightCircleOutlined style={{ fontSize: 60 }} />}
    //         />
    //     );
    // };

    // const LeftArrow = () => {
    //     return <Button icon={<LeftCircleOutlined />} size="middle" />;
    // };
    return (
        <>
            <h3 style={{ textAlign: "center" }}>Les jeux les plus célèbres</h3>
            <Carousel
                slidesToShow={5}
                dots={false}
                // arrows={true}
                // prevArrow={LeftArrow()}
                // nextArrow={RightArrow()}
            >
                {gamePlay.map((item, id) => {
                    return (
                        <>
                            {/* <div onClick={HandleHistory}> */}
                            <p>
                                <img
                                    src={item.background_image}
                                    alt="#"
                                    width="200"
                                    height="200"
                                />
                            </p>
                            <h3>{item.name}</h3>
                            {/* </div> */}
                        </>
                    );
                })}
            </Carousel>
        </>
    );
}
