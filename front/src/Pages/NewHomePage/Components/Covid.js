import React, { useState } from "react"
import { Carousel } from "antd"
import { useHistory } from "react-router";


export default function Covid() {
    const history = useHistory();

    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    //   setTimeout(() => {
    //     history.push("/covids");
    // }, );

    function HandleRoute() {
        history.push("/covids")
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <>
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
                <div onClick={HandleRoute}>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    )
}