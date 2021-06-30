import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import MovieSecond from "./components/MovieSecond";
import MovieSort from "./components/MovieSortData";
// import Search from "./components/SearchForm";
import SortForm from "./components/SortForm";
import { MovieContext } from "./Context";

const Home = React.memo(() => {
    const { movies, sortedMovies } = useContext(MovieContext);
    const { TabPane } = Tabs;

    if (!movies) {
        return "error";
    }

    return (
        <>
            <Tabs defaultActiveKey="1" style={{ marginTop: 60 }}>
                <TabPane tab="Accueil" key="1">
                    <SortForm />
                    <Row style={{ marginLeft: 80 }}>
                        {sortedMovies.map((testModal) => {
                            return (
                                <MovieSort key={testModal.id} {...testModal} />
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Card" key="2">
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
