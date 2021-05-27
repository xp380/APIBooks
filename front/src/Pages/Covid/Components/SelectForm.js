import React, { useEffect, useState } from "react";

export default function App() {
    const [data, setData] = useState({});
    const [countries, setCountries] = useState([]);
    const [Country, setCountry] = useState("");

    const getCountries = async () => {
        const response = await fetch(
            "https://api.covid19api.com/countries"
        );
        const json = await response.json();
        setCountries(json);
    };
    const getData = async () => {
        const response = await fetch(
            `https://api.covid19api.com/total/dayone/country/${Country}`
        );
        const json = await response.json();
        setData(json);
    };

    const getSelectValue = (e) => {
        setCountry(e.target.value);

        getData();
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <select
                        className="form-select p-2"
                        aria-label="Default select example"
                        onChange={getSelectValue}
                    >
                        <option value="" selected>
                            Select Country
                        </option>
                        {countries.map((c) => {
                            return (
                                <>
                                    <option value={c.Country}>{c.Country}</option>
                                </>
                            );
                        })}
                    </select>

                    <div className="col-12 col-sm-12 col-md-12 m-auto text-center">
                        <div className="row my-4">


                            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

                                <h1> Today's Deaths</h1>
                                <hr />
                                <h2>{data.Deaths}</h2>

                            </div>

                            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

                                <h1> Active Cases</h1>
                                <hr />
                                <h2>{data.Active}</h2>

                            </div>


                            <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

                                <h1> Recovered</h1>
                                <hr />
                                <h2>{data.Recovered}</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// import React, { useEffect, useState } from "react";

// export default function App() {
//     const [data, setData] = useState({});
//     const [countries, setCountries] = useState([]);
//     const [country, setCountry] = useState("");

//     const getCountries = async () => {
//         const response = await fetch(
//             "https://corona.lmao.ninja/v2/countries?yesterday&sort"
//         );
//         const json = await response.json();
//         setCountries(json);
//     };
//     const getData = async () => {
//         const response = await fetch(
//             `https://corona.lmao.ninja/v2/countries/${country}?yesterday=true&strict=true&query`
//             // https://corona.lmao.ninja/v2/countries/France?yesterday=true&strict=true&query
//         );
//         const json = await response.json();
//         setData(json);
//     };

//     const getSelectValue = (e) => {
//         setCountry(e.target.value);
//         getData();
//     };

//     useEffect(() => {
//         getCountries();
//     }, []);

//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <select
//                         className="form-select p-2"
//                         aria-label="Default select example"
//                         onChange={getSelectValue}
//                     >
//                         <option value="" selected>
//                             Select Country
//                         </option>
//                         {countries.map((c) => {
//                             return (
//                                 <>
//                                     <option value={c.country}>{c.country}</option>
//                                 </>
//                             );
//                         })}
//                     </select>

//                     <div className="col-12 col-sm-12 col-md-12 m-auto text-center">
//                         <div className="row my-4">
//                             <h1>{data.country}</h1>

//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1> Total Cases</h1>
//                                 <hr />
//                                 <h2>{data.cases}</h2>

//                             </div>

//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1> Today's Cases</h1>
//                                 <hr />
//                                 <h2>{data.todayCases}</h2>

//                             </div>

//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1> Today's Deaths</h1>
//                                 <hr />
//                                 <h2>{data.todayDeaths}</h2>

//                             </div>

//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1> Active Cases</h1>
//                                 <hr />
//                                 <h2>{data.active}</h2>

//                             </div>

//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1>Recovered Today</h1>
//                                 <hr />
//                                 <h2>{data.todayRecovered}</h2>

//                             </div>
//                             <div className="col-12 col-sm-6 col-md-4 mx-auto my-3 text-center">

//                                 <h1> Recovered</h1>
//                                 <hr />
//                                 <h2>{data.recovered}</h2>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

