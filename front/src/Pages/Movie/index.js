import React, { useContext } from "react";
import { Tabs, Row } from "antd";

import MovieFirst from "./components/MovieFirst";
import MovieSecond from "./components/MovieSecond";
import MoviesThird from "./components/MoviesThird";
import MovieSort from "./components/MovieSortData";
import Search from "./components/SearchForm";
import SortForm from "./components/SortForm";
import { MovieContext } from "./Context";

const Home = React.memo(() => {
    const { movies, dataModal } = useContext(MovieContext);
    const { TabPane } = Tabs;

    if (!movies) {
        return "error";
    }

    return (
        <>
            <Tabs defaultActiveKey="1" style={{ marginTop: 60 }}>
                <TabPane tab="Accueil" key="1">
                    <MovieFirst />
                </TabPane>
                <TabPane tab="Card" key="2">
                    <Search />
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
                <TabPane tab="Modal" key="3">
                    <Row>
                        {dataModal.map((singleModal) => {
                            return (
                                <>
                                    <MoviesThird
                                        key={singleModal.id}
                                        {...singleModal}
                                    />
                                </>
                            );
                        })}
                    </Row>
                </TabPane>
                <TabPane tab="Sort" key="4">
                    <SortForm />
                    <MovieSort />
                </TabPane>
            </Tabs>
        </>
    );
});
export default Home;
