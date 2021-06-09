import React, { useContext, useRef } from "react";
import { CryptoContext } from "../Context";

const SearchForm = () => {
    const { setSearchCrypto } = useContext(CryptoContext);
    const inputRef = useRef();
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = () => setSearchCrypto(inputRef.current.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search movies ...."
                ref={inputRef}
                onChange={searchItems}
            />

            {/* <select
                ref={inputRef}
                aria-label="Default select"
                onChange={searchItems}
            >
                <option value="" selected>
                    Select Crypto
                </option>
                {cryptoData.map((c) => {
                    return (
                        <>
                            <option value={c.searchCrypto}>{c.searchCrypto}</option>
                        </>
                    )
                })}
            </select> */}
            <button type="submit">Enter</button>
        </form>
    );
};

export default SearchForm;
