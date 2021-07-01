import React, { useContext, useRef } from "react";
import { MangaContext } from "../Context";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchForm = () => {
    const { setSearchAnime } = useContext(MangaContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => setSearchAnime(inputRef.current.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ marginLeft: 90 }}
                type="text"
                placeholder="search mangas ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <SearchOutlined />
        </form>
    );
};

export default SearchForm;
