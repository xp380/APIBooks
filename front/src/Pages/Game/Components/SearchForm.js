import React, { useContext, useRef } from "react"
import { GameContext } from "../Context"
import { Input } from 'antd'

const { Search } = Input

const SearchForm = () => {
    const { setSearchGame } = useContext(GameContext)
    const inputRef = useRef()
    const handleSubmit = (e) => e.preventDefault()
    const searchItems = () => setSearchGame(inputRef.current.value)

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search movies ...."
                ref={inputRef}
                onChange={searchItems}
            />

        </form>
    )
}

export default SearchForm;