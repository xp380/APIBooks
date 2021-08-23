import React, { useContext } from "react";
import { Carousel } from "antd";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Movie() {
    const { movieWatch } = useContext(GlobalContext);
    const history = useHistory();

    function HandleRoute() {
        history.push("/covids");
    }

    return (
        <>
            <Carousel slidesToShow={5} dots={false}>
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
                            {/* </div> */}
                        </>
                    );
                })}
            </Carousel>
        </>
    );
}
