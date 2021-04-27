import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Display() {

    const [mangaData, setMangaData] = useState([])

    function GetAllUSers() {
        axios.get('https://api.jikan.moe/v3/top/anime/1/upcoming')
            .then(response => {
                console.log(response.data)
                const { top } = response.data
                setMangaData(top)
            }).catch(error => {
                console.log(error);
            })

    }

    useEffect(() => {
        GetAllUSers();
    }, []) 
    return(
        <>
        {mangaData.map((data) => (
        <tr key={data.mal_id}>
        <td>Titre: {data.title}</td>
        <td>Classement: {data.rank}</td>
        <td>Genre: {data.type}</td>
        <td>Date début: {data.start_date}</td>
        <td>Date Fin: {data.start_end}</td>
        <td>Image: <img alt="test" src={data.image_url} style={{width: 50, height: 50}}/></td>
        {/* <td>Image: <img alt='test' src="https://static.fnac-static.com/multimedia/Images/FR/NR/71/a5/7f/8365425/1507-1/tsp20170317112323/Overlord.jpg" style={{width: 50, height: 50}}></img></td> */}
    </tr>
        ))}

        </>
    )
}