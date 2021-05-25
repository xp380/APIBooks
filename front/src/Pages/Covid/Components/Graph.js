import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

// const Graph = () => {
//     const getData = () => {}

//     useEffect(() => {
//         getData();
//     }, []);
//     return (
//         <div>Graphique</div>
//     );
// }

// export default Graph;

export default function Graph() {

    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    let date = [];
    let confirmed = [];
    let deaths = [];
    let recovered = [];
    useEffect(() => {

        axios.get("https://api.covid19api.com/total/country/france?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z").then(res => {
            // https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z

            const ipl = res.data;
            setPosts(ipl);

            ipl.forEach(record => {
                date.push(record.Date);
                confirmed.push(record.Confirmed);
                deaths.push(record.Deaths)
                recovered.push(record.Recovered)
            });

            setData({
                Data: {
                    labels: date,
                    datasets: [
                        {
                            label: "Nombre de confirmés",
                            data: confirmed,
                            backgroundColor: [
                                "Blue",
                            ]
                        },
                        {
                            label: "Nombre de morts",
                            data: deaths,
                            backgroundColor: [
                                "Red",
                            ]
                        },
                        {
                            label: "Nombre de Rétablis",
                            data: recovered,
                            backgroundColor: [
                                "Green",
                            ]
                        }
                    ],
                }
            });
        });
    }, []);

    return (
        <div>
            <Line data={data.Data}></Line>
        </div>
    );
}


// import React, { useContext } from 'react'
// import { Line } from 'react-chartjs-2'
// import { CovidContext } from '../Context'

// const Main = () => {
//     const { covids, setCovids } = useContext(CovidContext)
//     console.log(covids)
//     const data = {

//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//         datasets: [
//             {
//                 label: "First dataset",
//                 data: [],
//                 fill: true,
//                 backgroundColor: "rgba(75,192,192,0.2)",
//                 borderColor: "rgba(75,192,192,1)"
//             },
//             {
//                 label: "Second dataset",
//                 data: [],
//                 fill: false,
//                 borderColor: "#742774"
//             }
//         ]
//     };

//     return (
//         <>
//             <Line data={data.covids} />
//         </>
//     )
// }

// export default Main