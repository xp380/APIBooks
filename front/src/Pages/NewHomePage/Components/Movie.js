import React, { useContext } from "react"
import { Carousel } from "antd"
import { GlobalContext } from "../Context"
import { useHistory } from "react-router"

export default function Movie() {
    const { movieWatch } = useContext(GlobalContext)
    const history = useHistory()

    function HandleRoute() {
        history.push("/covids")
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#364d79',
    };
    return (
        <>
            {movieWatch.map((item, id) => {
                return (
                    <Carousel>
                        <div>
                            <h3 style={contentStyle}>{id}</h3>
                        </div>
                        <div onClick={HandleRoute}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt="#"
                                width="200"
                                height="200"
                            />
                            <h3 style={contentStyle}>{item.title}</h3>
                        </div>

                    </Carousel>
                )
            })}
        </>
    )
}