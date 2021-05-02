// import React, { useEffect, useState } from 'react'
// import { Tabs, TabPane } from "antd"
// import axios from 'axios'
// import Display from './Context'
// function UserList() {
//     const [mangaData, setMangaData] = useState([])
//     const { TabPane } = Tabs;
//     function GetAllUSers() {
//         axios.get('https://api.jikan.moe/v3/top/anime')
//             .then(response => {
//                 console.log(response.data)
//                 const { top } = response.data
//                 setMangaData(top)
//             }).catch(error => {
//                 console.log(error);
//             })

//     }

//     useEffect(() => {
//         GetAllUSers();
//     }, [])

//     return (
//         <>
//            <Tabs defaultActiveKey="1" >
//                 <TabPane tab="Accueil" key="1">
//                 <ul>
//                 {mangaData.map((user) => (
//                 <tr key={user.mal_id}>
//                     <td>Titre: {user.title}</td>
//                     <td>Classement: {user.rank}</td>
//                     <td>Genre: {user.type}</td>
//                     <td>Date début: {user.start_date}</td>
//                     <td>Date Fin: {user.start_end}</td>
//                     <td>Image: <img alt="test" src={user.image_url} style={{width: 50, height: 50}}/></td>
//                     {/* <td>Image: <img alt='test' src="https://static.fnac-static.com/multimedia/Images/FR/NR/71/a5/7f/8365425/1507-1/tsp20170317112323/Overlord.jpg" style={{width: 50, height: 50}}></img></td> */}
//                 </tr>
//                 ))}
//           </ul>
//                 </TabPane>
//                 <TabPane tab="Description" key="2">
//                     <Display />
//                 </TabPane>           
//             </Tabs>
//         </>
//     )
// }
// export default UserList

import React, {useContext} from 'react'
import {Tabs } from 'antd'

import { Manga } from './Components/Manga'
import { MangaContext } from './Context'

export default function MangaAnime(){
    const { TabPane } = Tabs
    const mangaContext = useContext(MangaContext)
    return(
        <>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Accueil" key="1">
            <h3>liste des mangas</h3>
            {
              mangaContext.mangas.length !== 0
              ? mangaContext.mangas.map(manga => <Manga manga={manga} key={manga.mal_id} />)
              : <h2>No Mangas Found</h2>
            }
          </TabPane>
          <TabPane tab="Card" key="2">
            <h3>Représentation Graphique du bilan de Covid</h3>
          </TabPane>
        </Tabs>
        </>
    )
}