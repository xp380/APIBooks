// import React, { useContext } from 'react'
// import { Tabs} from 'antd'

// import Movie from './components/Movie'
// import { MovieContext } from './Context';

// export default function Streaming(){
//     const movieContext = useContext(MovieContext)
//     const { TabPane } = Tabs;
//     return(
//         <>
//         <div className="App">
//             <Tabs defaultActiveKey="1" >
//                     <TabPane tab="Accueil" key="1">
//                         <h3>Liste des Films</h3>
//                         {movieContext.movies.length ? (
//                          movieContext.movies.map((lol) => <Movie ovie={lol} key={lol.id} />)
//                          ) : (
//                            <h2>No Movies Found</h2>
//                          )}
//                         {/* <Movie /> */}
//                         {/* {movieContext.movies.map((lol) => <Movie movie={lol} key={lol.id}/>)} */}
//                     </TabPane>
//                     <TabPane tab="Card" key="2">
//                         <h3>Liste des films</h3>
//                     </TabPane>
//             </Tabs>
//         </div>
//         </>
//     )
// }

import React, { useContext } from "react";
import { User } from "./components/Movie";
import { UserContext } from "./Context";
import { Tabs} from 'antd'

export default function App() {
  const { TabPane } = Tabs;
  const userContext = useContext(UserContext);

  return (
    <div className="App" >
      <div>
      <Tabs defaultActiveKey="1" >
                    <TabPane tab="Accueil" key="1">
                        <h3>Liste des Films</h3>
                        {userContext.users.length ? (
          userContext.users.map(user => <User user={user} key={user.id} />)
        ) : (
          <h2>No Users Found</h2>
        )}
                    </TabPane>
                    <TabPane tab="Card" key="2">
                        <h3>Liste des films</h3>
                    </TabPane>
            </Tabs>
        
      </div>
    </div>
  );
}
