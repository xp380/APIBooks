import React, { useState } from 'react'

export default function Time() {
    const [useTime] = useState(new Date())

    return (
        <p >
            {useTime.toLocaleDateString()} {useTime.toLocaleTimeString()}
        </p>
    )
}