import React, { useContext } from "react";
import { GlobalContext } from "../Context";
import { useHistory } from "react-router";
import { Carousel } from "antd";

export default function Manga() {
    const { mangaAnime } = useContext(GlobalContext);
    const history = useHistory();

    function HandleRoute() {
        history.push("/mangas");
    }

    return (
        <>
            <Carousel slidesToShow={5} dots={false}>
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
        </>
    );
}
