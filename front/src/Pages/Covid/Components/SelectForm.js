import React, { useContext } from "react";
import { CovidContext } from "../Context";

const SelectForm = () => {
    const { setSearchCovid, covidFound } = useContext(CovidContext);
    const handleSubmit = (e) => e.preventDefault();
    const searchItems = (e) => setSearchCovid(e.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <select
                aria-label="Default select"
                style={{ width: 320 }}
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
