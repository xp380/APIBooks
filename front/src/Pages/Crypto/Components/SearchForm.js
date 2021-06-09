import React, { useContext } from "react";
import { CryptoContext } from "../Context";
import { Select } from "antd";

const SearchForm = () => {
    const { Option } = Select;
    const { setSearchCrypto, cryptosData } = useContext(CryptoContext);
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = (e) => setSearchCrypto(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <select
                aria-label="Default select"
                style={{ width: 320 }}
                onChange={searchItems}
            >
                {cryptosData.map((item) => (
                    <option value={item.id}>{item.id}</option>
                ))}
            </select>
            {/* <Select
                // defaultValue={{ value: "bitcoin" }}
                style={{ width: 120 }}
                onChange={searchItems}
            >
                {cryptosData.map((item) => (
                    <Option value={item.id}>{item.id}</Option>
                ))}
            </Select> */}
        </form>
    );
};

export default SearchForm;
