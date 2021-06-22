import React, { useContext } from "react";
import { CovidContext } from '../Context'
import { Line } from "react-chartjs-2";

export const Graph = () => {
    const { data } = useContext(CovidContext);
    return (
        <div style={{ width: "85%", marginLeft: 70 }}>
            <Line data={data.Data}></Line>
        </div>
    );
}

export default Graph