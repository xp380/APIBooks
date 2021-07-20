import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

export default function Graph() {
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    let date = [];
    let high = [];
    let low = [];
    let price = [];

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur"
            )
            .then((res) => {
                const ipl = res.data;
                setPosts(ipl);

                ipl.forEach((record) => {
                    date.push(record.last_updated);
                    high.push(record.high_24h);
                    low.push(record.low_24h);
                    price.push(record.current_price);
                });

                setData({
                    Data: {
                        labels: date,
                        datasets: [
                            {
                                label: "Prix Élevé",
                                data: high,
                                backgroundColor: ["Blue"]
                            },
                            {
                                label: "Prix Basse",
                                data: low,
                                backgroundColor: ["Red"]
                            },
                            {
                                label: "Prix actuels",
                                data: price,
                                backgroundColor: ["Green"]
                            }
                        ]
                    }
                });
            });
    }, []);

    return (
        <div style={{ width: "85%", marginLeft: 80 }}>
            <Bar data={data.Data}></Bar>
        </div>
    );
}
