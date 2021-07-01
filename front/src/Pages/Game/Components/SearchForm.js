import React, { useContext, useRef } from "react";
import { GameContext } from "../Context";
import { MangaContext } from "../../Manga/Context";
import { MovieContext } from "../../Movie/Context";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

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
                style={{ marginLeft: 20 }}
                type="text"
                placeholder="search games ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <SearchOutlined />
        </form>
    );
};

export default SearchForm;
