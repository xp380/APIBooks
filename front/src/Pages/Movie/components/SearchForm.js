import React, { useContext, useRef } from "react";
import { MovieContext } from "../Context";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;

const SearchForm = () => {
    const { setSearchMovie } = useContext(MovieContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => setSearchMovie(inputRef.current.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ marginLeft: 90 }}
                type="text"
                placeholder="search movies ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <SearchOutlined />
        </form>
    );
};

export default SearchForm;
