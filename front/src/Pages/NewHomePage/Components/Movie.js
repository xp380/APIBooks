import React, { useContext } from "react"
import { Carousel } from "antd"
import { GlobalContext } from "../Context"


export default function Movie() {
    const { movieWatch, setMovieWatch } = useContext(GlobalContext)
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '#364d79',
    };
    return (
        <>
            {movieWatch.map(() => {
                return (
                    <Carousel>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                )
            })}
        </>
    )
}