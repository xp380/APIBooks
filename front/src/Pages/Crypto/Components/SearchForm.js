import React, { useContext } from "react";
import { CryptoContext } from "../Context";

const SearchForm = () => {
    const { setSearchCrypto, cryptosData } = useContext(CryptoContext);
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = (e) => setSearchCrypto(e.target.value);

    const select = { width: 320 };
    return (
        <form onSubmit={handleSubmit}>
            <select
                aria-label="Default select"
                style={select}
                onChange={searchItems}
            >
                {cryptosData.map((item) => (
                    <option value={item.id}>{item.id}</option>
                ))}
            </select>
        </form>
    );
};

export default SearchForm;
