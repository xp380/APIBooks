import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import MovieSecond from "./components/SearchMovie";
import MovieSort from "./components/SortMovie";
import SortForm from "./components/SortForm";
import { MovieContext } from "./Context";

const Home = React.memo(() => {
    const { movies, sortedMovies } = useContext(MovieContext);
    const { TabPane } = Tabs;

    if (!movies) {
        return "error";
    }
    const table = {
        backgroundColor: "#235e96",
        padding: 10,
        position: "fixed",
        width: "100%",
        zIndex: 1000
    };
    const tablestyle = { marginTop: 60 };

    const accueil = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "number",
        marginTop: 90
    };
    const row = { marginLeft: 80 };
    const search = {
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "number",
        marginTop: 90
    };
    return (
        <>
            <Tabs
                defaultActiveKey="1"
                type="card"
                tabBarGutter={50}
                tabBarStyle={table}
                style={tablestyle}
            >
                <TabPane tab="Accueil" key="1">
                    <h3 style={accueil}>Liste des Films</h3>
                    <SortForm />
                    <Row style={row}>
                        {sortedMovies.map((testModal) => {
                            return (
                                <MovieSort key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
                    <h3 style={search}>Recherche de film</h3>
                    {/* <Search /> */}
                    {movies.slice(0, 1).map((moviesTest) => {
                        <h3>Représentation des Films</h3>;
                        return (
                            <MovieSecond
                                key={moviesTest.id}
                                moviesTest={moviesTest}
                            />
                        );
                    })}
                </TabPane>
            </Tabs>
        </>
    );
});
export default Home;
