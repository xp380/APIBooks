import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Jeux() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const api = await axios.get(
                "https://api.rawg.io/api/platforms?key=9b12083a67134bbdad6628f19da1e91a"
            );
            setGames([...api.data])
        })()
    }, [])
    return (
        <>
            <h4 style={{ marginTop: 200 }}>Liste des jeux </h4>
            {games.map(game => (
                <div>{game.id}</div>
            ))}
        </>
    )
}
