import React, { useEffect, useState } from "react";
import axios from "axios";

const api_key = "30582d63e1f78f53711360b533a5d861";
const BASE_URL = "https://api.themoviedb.org/3";
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

export default function Index() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });
    
  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="grid">
          {data.map((movie) => (
            <div className="item">
              {/* <img src={getImage(movie.poster_path)} /> */}
              <h3>{movie.original_title}</h3>
              <p>{movie.overview}</p>
              <p>{movie.original_language}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

