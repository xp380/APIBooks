import React, { useContext } from "react";
import { CovidContext } from "../Context";
import { Line } from "react-chartjs-2";

export const Graph = () => {
    const { data } = useContext(CovidContext);
    const line = { width: "85%", marginLeft: 70 };
    return (
        <div style={line}>
            <Line data={data.Data}></Line>
        </div>
    );
};

export default Graph;
