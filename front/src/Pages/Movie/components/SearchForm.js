import React, { useContext, useRef } from 'react'
import { MovieContext } from '../Context'
import { Input } from 'antd'

const { Search } = Input;

const SearchForm = () => {
    const { setSearchMovie } = useContext(MovieContext)
    const inputRef = useRef()
    const handleSubmit = (e) => e.preventDefault()
    const searchItems = () => setSearchMovie(inputRef.current.value)

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