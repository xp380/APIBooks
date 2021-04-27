import React, { useState, useEffect} from 'react'
import { Tabs, Descriptions } from 'antd'
 
export default function Index(){

    const { TabPane } = Tabs;

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
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Accueil" key="1">
                <ul>
          {
            games.map(game => (
              <Descriptions title={game.id}>
                  <Descriptions.Item label="Nom">{game.name}</Descriptions.Item>
                  <Descriptions.Item label="Date">{game.released}</Descriptions.Item>
                  <Descriptions.Item label="Notes">{game.rating}</Descriptions.Item>
                  <Descriptions.Item label="Compteur">{game.ratings_count}</Descriptions.Item>
                  <Descriptions.Item label="Image"><img src={game.background_image} alt="game" style= {{width: 100, height: 100 }}/> </Descriptions.Item>
              </Descriptions>
            ))
          }
          </ul>
                </TabPane>
                <TabPane tab="Card" key="2">
                    Card
                </TabPane>
               
            </Tabs>
         
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
