import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Manga() {
    const [transition, setTransition] = useState(false);
    const carousel = useRef(null);
    const { mangaAnime } = useContext(GlobalContext);
    const history = useHistory();

    function HandleRoute() {
        history.push("/mangas");
    }

    return (
        <>
            <h3 style={{ textAlign: "center" }}>Les mangas les plus connus</h3>
            <LeftOutlined
                onClick={() => carousel.current.prev()}
                style={{
                    top: 550,
                    position: "absolute",
                    height: "100%",
                    display: "flex",

                    alignItems: "center",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "white",
                    zIndex: "10",
                    color: "red"
                }}
            />
            <Carousel
                slidesToShow={5}
                dots={false}
                ref={carousel}
                beforeChange={() => setTransition(true)}
                afterChange={() => setTransition(false)}
            >
                {mangaAnime.map((item, id) => {
                    return (
                        <>
                            {/* <div onClick={HandleRoute}> */}

                            <p>
                                <img
                                    alt="#"
                                    src={item.image_url}
                                    width="200"
                                    height="200"
                                />
                            </p>
                            <h3>{item.title}</h3>
                            {/* </div> */}
                        </>
                    );
                })}
            </Carousel>
            <RightOutlined
                onClick={() => carousel.current.next()}
                style={{
                    position: "absolute",
                    top: 550,
                    left: "calc(100% - 50px)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    zIndex: "10",
                    height: "100%",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    color: "blue"
                }}
            />
        </>
    );
}
