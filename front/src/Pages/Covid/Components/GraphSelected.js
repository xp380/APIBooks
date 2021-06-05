
import React from 'react'
import { Line } from "react-chartjs-2";

export const GraphSelected = ({ detailsData }) => {
    const { Confirmed, Recovered, Deaths, Date } = detailsData
    const date = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const firstdata = [33, 53, 85, 41, 44, 65]
    const secondData = [33, 25, 35, 51, 54, 76]
    const data = {
        labels: date,
        datasets: [
            {
                label: "First dataset",
                data: firstdata,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: secondData,
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    return (
        <>
            <p>lol</p>
            <Line data={data}></Line>
        </>
    )
}

export default GraphSelected;

// import React from 'react'
// import { Line } from "react-chartjs-2";

// export const GraphSelected = ({ detailsData }) => {
//     const { Confirmed, Recovered, Deaths, Date } = detailsData

//     let date = [Date]
//     let confirmed = [Confirmed]
//     let deaths = [Deaths]
//     let recovered = [Recovered]

//     const data = {
//         labels: date,
//         datasets: [
//             {
//                 label: "Nombre de confirmés",
//                 data: confirmed,
//                 backgroundColor: "Blue",
//             },
//             {
//                 label: "Nombre de morts",
//                 data: deaths,
//                 borderColor: "Black"
//             },
//             {
//                 label: "Nombre de Rétablis",
//                 data: recovered,
//                 borderColor: "Green"
//             },
//         ]
//     };

//     return (
//         <Line data={data}></Line>
//     )
// }

// export default GraphSelected;