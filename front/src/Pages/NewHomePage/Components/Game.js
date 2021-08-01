import React, { useContext } from "react"
import { Carousel } from "antd"
import { GlobalContext } from "../Context"
import { useHistory } from "react-router"

export default function Game() {
    const { gamePlay } = useContext(GlobalContext)
    const history = useHistory()

    function HandleHistory() {
        history.push('./games')
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
            {gamePlay.map((item, id) => {
                return (
                    <Carousel>
                        <div>
                            <h3 style={contentStyle}>{id}</h3>
                        </div>
                        <div>{item.name}</div>
                        <div onClick={HandleHistory}>
                            <img
                                src={item.background_image}
                                width="200"
                                height="200"
                            />
                        </div>
                    </Carousel>
                )
            })}
        </>
    )
}