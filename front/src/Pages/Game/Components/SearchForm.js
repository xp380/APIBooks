import React, { useContext, useRef } from "react";
import { GameContext } from "../Context";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchForm = () => {
    const { setSearchGame } = useContext(GameContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => setSearchGame(inputRef.current.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ marginLeft: 80 }}
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
