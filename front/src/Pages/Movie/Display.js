import React, {useState, useEffect} from 'react'
import { Card, Col, Row } from "antd"
import axios from "axios";

const api_key = "30582d63e1f78f53711360b533a5d861";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



export default function Display(){
  

  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });
    
  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });


  useEffect(() => {
    getUpcoming.then((res) => {
      console.log(res.data)
      setData(res.data.results);
    });
  }, []);
    return(
        <div className="site-card-wrapper">
        {data.map((movie) => (
          <Row gutter={6}>
          <Col span={8}>
          {<img alt="lol" src={getImage(movie.poster_path)} />}
            <Card title={movie.original_title} bordered={false}>
            <h4>date de sortie: {movie.release_date}</h4>
            <br />
            <h4>Résumé:{movie.overview}</h4>
            <br />            
            </Card>
          </Col>
        </Row>
        ))}
        </div>
    )
}