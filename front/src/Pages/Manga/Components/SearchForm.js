import React, { useContext, useRef } from 'react'
import { MangaContext } from "../Context"
import { Input } from 'antd'

const { Search } = Input;

const SearchForm = () => {
    const { setSearchAnime } = useContext(MangaContext)
    const inputRef = useRef()
    const handleSubmit = (e) => e.preventDefault()
    const searchItems = () => setSearchAnime(inputRef.current.value)

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search movies ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <button type="submit">
                Enter
            </button>
        </form>
    )
}

export default SearchForm;