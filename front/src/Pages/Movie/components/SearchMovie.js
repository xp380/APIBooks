import React, { useContext } from "react";
import { MovieContext } from "../Context";
import { Card, Row, Tag } from "antd";

const Movies = () => {
    const { movies, genres } = useContext(MovieContext);
    const row = { marginLeft: 80 };
    const card = { width: 300, margin: 10 };
    const titre = { textAlign: "left" };
    const vote = { float: "right" };
    const image = { marginLeft: 25 };
    return (
        <Row style={row}>
            {movies.slice(0, 6).map((item, id) => {
                return (
                    <Card key={id} style={card} bordered={true}>
                        <div>
                            <p style={titre}>
                                {item.title}{" "}
                                <span style={vote}>{item.vote_average}</span>
                            </p>
                        </div>
                        <p style={image}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                alt="#"
                                width="200"
                                height="200"
                            />
                        </p>
                        {item.genre_ids.map((id) => {
                            if (id === 35) {
                                return <Tag color="blue"> {genres[id]} </Tag>;
                            } else if (id === 80) {
                                return <Tag color="red"> {genres[id]}</Tag>;
                            } else if (id === 28) {
                                return <Tag color="cyan"> {genres[id]}</Tag>;
                            } else if (id === 12) {
                                return <Tag color="green"> {genres[id]}</Tag>;
                            } else if (id === 16) {
                                return <Tag color="yellow"> {genres[id]}</Tag>;
                            } else if (id === 99) {
                                return <Tag color="purple"> {genres[id]}</Tag>;
                            } else if (id === 18) {
                                return <Tag color="gold"> {genres[id]}</Tag>;
                            } else if (id === 10751) {
                                return <Tag color="pink"> {genres[id]}</Tag>;
                            } else if (id === 14) {
                                return <Tag color="orange"> {genres[id]}</Tag>;
                            } else if (id === 36) {
                                return <Tag color="lime"> {genres[id]}</Tag>;
                            } else if (id === 27) {
                                return (
                                    <Tag color="processing"> {genres[id]}</Tag>
                                );
                            } else if (id === 10402) {
                                return (
                                    <Tag color="geekblue"> {genres[id]}</Tag>
                                );
                            } else if (id === 9648) {
                                return <Tag color="magenta"> {genres[id]}</Tag>;
                            } else if (id === 10749) {
                                return <Tag color="green"> {genres[id]}</Tag>;
                            } else if (id === 878) {
                                return <Tag color="volcano"> {genres[id]}</Tag>;
                            } else if (id === 100770) {
                                return <Tag color="pink"> {genres[id]}</Tag>;
                            } else if (id === 53) {
                                return <Tag color="red"> {genres[id]}</Tag>;
                            } else if (id === 10762) {
                                return <Tag color="lime"> {genres[id]}</Tag>;
                            } else if (id === 37) {
                                return <Tag color="yellow"> {genres[id]}</Tag>;
                            }
                        })}
                    </Card>
                );
            })}
        </Row>
    );
};

export default Movies;
