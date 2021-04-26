import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ chart }) => {
    console.log(JSON.stringify(chart));

    return (
        <div>
            <Line
                data={chart}
                height={400}
                width={900}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: "Covid-19",
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: "top"
                    }
                }}
            />
        </div>
    );
};

export default Chart;
