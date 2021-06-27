import React, { useState } from 'react'
import Progress from "../TestProgress"

export default function Time() {
    const [useTime] = useState(new Date())

    return (
        <>

            {useTime.toLocaleDateString()} {useTime.toLocaleTimeString()}
        </>
    )
}