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
            <Tabs
                defaultActiveKey="1"
                type="card"
                tabBarGutter={50}
                tabBarStyle={{
                    backgroundColor: "#235e96",
                    padding: 10,
                    position: "fixed",
                    width: "100%",
                    zIndex: 1000
                }}
                style={{ marginTop: 60 }}
            >
                <TabPane tab="Accueil" key="1">
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "number",
                            marginTop: 90
                        }}
                    >
                        Liste des Mangas
                    </h3>
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
                    <h3
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontFamily: "number",
                            marginTop: 90
                        }}
                    >
                        Recherche de Mangas
                    </h3>
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
