import React, { useContext } from "react";
import { Carousel } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";

export default function Game() {
    const { gamePlay } = useContext(GlobalContext);
    const history = useHistory();

    function HandleHistory() {
        history.push("./games");
    }

    return (
        <>
            <h3 style={{ textAlign: "center" }}>Les jeux les plus célèbres</h3>
            <Carousel
                slidesToShow={5}
                dots={false}
                autoplay={true}
                speed={6000}
            >
                {gamePlay.map((item, id) => {
                    return (
                        <>
                            <p>
                                <img
                                    src={item.background_image}
                                    alt="#"
                                    width="200"
                                    height="200"
                                />
                            </p>
                            <h3>{item.name}</h3>
                        </>
                    );
                })}
            </Carousel>
        </>
    );
}
