import React, { useContext } from "react"
import { GlobalContext } from "../Context"
import { useHistory } from "react-router"
import { Carousel } from "antd"

export default function Manga() {
    const { mangaAnime } = useContext(GlobalContext)
    const history = useHistory()

    function HandleRoute() {
        history.push("/mangas")
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    };
    return (
        <>
            {mangaAnime.map((item, id) => {
                return (
                    <Carousel>
                        <div onClick={HandleRoute}>
                            <h3 style={contentStyle}>{id}</h3>
                            <img
                                src={item.image_url}
                            />
                            {item.title}
                        </div>

                    </Carousel>
                )
            })}
        </>
    )
}