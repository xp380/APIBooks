import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { MovieProvider } from './Pages/Movie/Context'
import { MangaProvider } from './Pages/Manga/Context'
import { GameProvider } from './Pages/Game/Context'
import Covid from './Pages/Covid/index'
import Crypto from './Pages/Crypto/index'
import Game from './Pages/Game/index'
import Manga from './Pages/Manga/index'
import Movie from './Pages/Movie/index'
import 'antd/dist/antd.css';

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Covid /> */}
    {/* <Crypto /> */}
    <GameProvider>
      <Game />
    </GameProvider>
    {/* <MangaProvider>
      <Manga />
    </MangaProvider> */}
    {/* <MovieProvider>
      <Movie />
    </MovieProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
