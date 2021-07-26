import React from "react"
import Covid from "./Components/Covid"
import Crypto from "./Components/Crypto"
import Game from "./Components/Game"
import Manga from "./Components/Manga"
import Movie from "./Components/Movie"

export default function NewHome() {
    return (
        <>
            <Covid />
            <Crypto />
            <Game />
            <Manga />
            <Movie />
        </>
    )
}