import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CovidContext = createContext();

export const CovidProvider = ({ children }) => {
    const [covids, setCovids] = useState([]);
    const [data, setData] = useState([]);
    const [searchCovid, setSearchCovid] = useState("south-africa");
    const [covidSearched, setCovidSearched] = useState([]);

    const [covidData, setCovidData] = useState([]);
    const [sortedCovid, setSortedCovid] = useState([]);
    const [searchValue] = useState("");
    const [sortType, setSortType] = useState("asc");

    let date = [];
    let confirmed = [];
    let deaths = [];
    let recovered = [];

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://api.covid19api.com/total/country/france"
            );
            setCovids(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        axios
            .get(
                "https://api.covid19api.com/total/country/france?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
            )
            .then((res) => {
                const ipl = res.data;
                ipl.forEach((record) => {
                    date.push(record.Date);
                    confirmed.push(record.Confirmed);
                    deaths.push(record.Deaths);
                    recovered.push(record.Recovered);
                });

                setData({
                    Data: {
                        labels: date,
                        datasets: [
                            {
                                label: "Nombre de confirmés",
                                data: confirmed,
                                backgroundColor: ["Blue"]
                            },
                            {
                                label: "Nombre de morts",
                                data: deaths,
                                backgroundColor: ["Red"]
                            },
                            {
                                label: "Nombre de Rétablis",
                                data: recovered,
                                backgroundColor: ["Green"]
                            }
                        ]
                    }
                });
            });
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://api.covid19api.com/total/country/france"
            );
            setCovidData(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        let filteredList = covidData.filter((covid) =>
            covid.Country.toLowerCase().includes(searchValue)
        );
        setSortedCovid(filteredList);
    }, [searchValue, covidData]);

    useEffect(() => {
        const getCovid = async () => {
            try {
                const response = await axios.get(
                    `https://api.covid19api.com/country/${searchCovid}`
                );
                setCovidSearched(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCovid();
    }, [searchCovid]);

    const contextValues = {
        covids,
        setCovids,
        data,
        sortedCovid,
        sortType,
        setSortType,
        setSortedCovid,
        covidData,
        setSearchCovid,
        covidSearched
    };

    return (
        <CovidContext.Provider value={contextValues}>
            {children}
        </CovidContext.Provider>
    );
};
