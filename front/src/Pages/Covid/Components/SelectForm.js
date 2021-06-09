import React, { useContext, useRef } from "react";
import { CovidContext } from "../Context";
import { Input } from "antd";

const { Search } = Input;

const SelectForm = () => {
    const { setSearchCovid } = useContext(CovidContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => setSearchCovid(inputRef.current.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search movies ...."
                ref={inputRef}
                onChange={searchItems}
            />
            <button type="submit">Enter</button>
        </form>
    );
};

export default SelectForm;
