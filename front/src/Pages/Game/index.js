import React, { useState, useEffect} from 'react'

export default function Index(){
    
    const [games, setGames] = useState([])

    const fetchGames = () => {
        fetch('https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
    }
    useEffect(()=> {
        fetchGames()
    }, [])
    
    return (
        <div>
          <ul>
          {
            games.map(game => (
              <li key={game.id}>
                <h3>{game.name}</h3>
                <img src={game.background_image} alt="game"/>
              </li>
            ))
          }
          </ul>
        </div>
      )
}

// import React, { useState, useEffect } from 'react'
// import axios from "axios";

// export default function Jeux() {
//     const [games, setGames] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const api = await axios.get(
//                 "https://api.rawg.io/api/games?key=9b12083a67134bbdad6628f19da1e91a"
//             );
//             setGames([...api.data])
//         })()
//     }, [])
//     return (
//         <>
//             <h4 style={{ marginTop: 200 }}>Liste des jeux </h4>
//             {games.map(game => (
//                 <div>{game.id}</div>
//             ))}
//         </>
//     )
// }
