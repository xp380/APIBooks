import React, { useState, useContext, useRef } from "react";
import { Carousel } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Movie() {
    const [isLoading, setIsLoading] = useState(false);
    const [change, setChange] = useState(false);
    const carousel = useRef(null);
    const { movieWatch } = useContext(GlobalContext);
    const history = useHistory();

    function HandleRoute() {
        history.push("/covids");
    }

    return (
        <>
            <h3 style={{ textAlign: "center" }}>
                Sorties de la semaine en films
            </h3>
            <LeftOutlined
                onClick={() => carousel.current.prev()}
                style={{
                    top: 950,
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
                beforeChange={() => setChange(true)}
                afterChange={() => setChange(false)}
            >
                {movieWatch.map((item, id) => {
                    return (
                        <>
                            {/* <div onClick={HandleRoute}> */}
                            <p>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt="#"
                                    width="200"
                                    height="200"
                                />
                            </p>
                            <h3>{item.title}</h3>
                        </>
                    );
                })}
            </Carousel>
            <RightOutlined
                onClick={() => carousel.current.next()}
                style={{
                    position: "absolute",
                    top: 950,
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
