import React, { useContext, useRef } from "react";
import { GameContext } from "../Pages/Game/Context";
import { MangaContext } from "../Pages/Manga/Context";
import { MovieContext } from "../Pages/Movie/Context";
import { SearchOutlined } from "@ant-design/icons";

const SearchForm = () => {
    const { setSearchGame } = useContext(GameContext);
    const { setSearchAnime } = useContext(MangaContext);
    const { setSearchMovie } = useContext(MovieContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => {
        setSearchMovie(inputRef.current.value);
        setSearchAnime(inputRef.current.value);
        setSearchGame(inputRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ marginLeft: 20, lineHeight: 3 }}
                type="text"
                placeholder="search  ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <SearchOutlined />
        </form>
    );
};

export default SearchForm;
