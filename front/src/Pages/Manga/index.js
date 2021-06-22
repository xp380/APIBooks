import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import MangaList from "./Components/Manga";
import Mangas from "./Components/Mangas";
import Search from "./Components/SearchForm";
import SortForm from "./Components/SortForm";
import { MangaContext } from "./Context";

const Home = React.memo(() => {
    const { animes, sortedMangas } = useContext(MangaContext);
    const { TabPane } = Tabs;

    if (!animes) {
        return "error";
    }
    return (
        <>
            <Tabs defaultActiveKey="1" style={{ marginTop: 60 }}>
                <TabPane tab="Accueil" key="1">
                    <SortForm />
                    <Row style={{ marginLeft: 80 }}>
                        {sortedMangas.map((testModal) => {
                            return (
                                <MangaList key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <Search />
                    {animes.slice(0, 1).map((animeTest) => {
                        <h3>Liste des Mangas</h3>;
                        return (
                            <Mangas
                                key={animeTest.mal_id}
                                animeTest={animeTest}
                            />
                        );
                    })}
                </TabPane>

            </Tabs>
        </>
    );
});
export default Home;
