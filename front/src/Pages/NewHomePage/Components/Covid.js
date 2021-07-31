import React, { useState } from "react"
import { Statistic } from "antd"
import { useHistory } from "react-router";


export default function Covid() {
    const history = useHistory();

    function HandleRoute() {
        history.push("/covids")
    }

    return (
        <>

        </>
    )
}