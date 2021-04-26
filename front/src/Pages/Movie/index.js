import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Card } from 'antd';

export default function Film() {
    const [data, setData] = useState({ Search: [] });
    // const api_key = "cdb56670";


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://www.omdbapi.com/?s=all&apikey=cdb56670");
            setData(result.data);
        };
        fetchData();
    }, [data]);


    return (
        <div className="site-card-border-less-wrapper">
            {data.Search.map(item => (
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <div>{item.Year}</div>
                    <div>{item.Title}</div>
                    <div>{item.Type}</div>
                    {/* <img src=""/> */}
        </Card>
            ))}
      </div>
        // <>
        //     {data.Search.map(item => (
        //         <ul style={{ marginTop: 100 }}>
        //             <li key={item.Title}>
                        
        //                 <div>{item.Year}</div>
        //                 <div>{item.Title}</div>
        //                 <div>{item.Type}</div>
        //                 <img width="200" height="200" alt={`the movie titled: ${item.Title}`} src={item.Poster} />
        //             </li>
        //         </ul>
        //     ))}
        // </>
    );
}