import React, { useContext } from "react";
import { CovidContext } from "../Context";

const SelectForm = () => {
    const { setSearchCovid, covidFound } = useContext(CovidContext);
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = (e) => setSearchCovid(e.target.value);
    const select = { width: 320 };
    return (
        <form onSubmit={handleSubmit}>
            <select
                aria-label="Default select"
                style={select}
                onChange={searchItems}
            >
                {covidFound.map((item) => (
                    <option value={item.Country}>{item.Country}</option>
                ))}
            </select>
        </form>
    );
};

export default SelectForm;
