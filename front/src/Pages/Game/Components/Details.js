import React from "react";
import { Modal, Carousel, Tag } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Details({ handleClose, open, detailsData }) {
    const {
        released,
        background_image,
        name,
        // tags: [{ slug }],
        tags,
        playtime,
        rating_top,
        rating,
        parent_platforms: [{ platform }],
        short_screenshots,
        parent_platforms,
        ratings_count
    } = detailsData;

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.5715"
                }}
                onClick={onClick}
            >
                <RightOutlined />
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.5715"
                }}
                onClick={onClick}
            >
                <LeftOutlined />
            </div>
        );
    };

    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <Modal
                onOk={handleClose}
                onCancel={handleClose}
                visible={open}
                width={1000}
                footer={null}
                bodyStyle={{
                    backgroundColor: "#212121"
                }}
            >
                <h3
                    style={{
                        color: "white",
                        marginLeft: 30
                    }}
                >
                    {name}
                </h3>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <img
                        src={background_image}
                        alt="#"
                        width="200"
                        height="200"
                    />

                    <div style={{ color: "white", marginLeft: 50 }}>
                        <p> Date de sortie: {released}</p>
                        <p>Temps d'une partie: {playtime}</p>

                        {/* <p>Plateforme: {slug}</p> */}
                        <p>
                            {" "}
                            Genres:
                            {tags.map((data) => {
                                if (data.id === 31) {
                                    return (
                                        <Tag color="blue"> {data.name} </Tag>
                                    );
                                } else if (data.id === 4) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.id === 51) {
                                    return (
                                        <Tag color="default"> {data.name} </Tag>
                                    );
                                } else if (data.id === 3) {
                                    return (
                                        <Tag color="error"> {data.name} </Tag>
                                    );
                                } else if (data.id === 5) {
                                    return (
                                        <Tag color="geekblue">
                                            {" "}
                                            {data.name}{" "}
                                        </Tag>
                                    );
                                } else if (data.id === 10) {
                                    return (
                                        <Tag color="gold"> {data.name} </Tag>
                                    );
                                } else if (data.id === 2) {
                                    return (
                                        <Tag color="green"> {data.name} </Tag>
                                    );
                                } else if (data.id === 40) {
                                    return (
                                        <Tag color="lime"> {data.name} </Tag>
                                    );
                                } else if (data.id === 14) {
                                    return (
                                        <Tag color="magenta"> {data.name} </Tag>
                                    );
                                } else if (data.id === 7) {
                                    return (
                                        <Tag color="volcano"> {data.name} </Tag>
                                    );
                                } else if (data.id === 11) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.id === 83) {
                                    return <Tag color="red"> {data.name} </Tag>;
                                } else if (data.id === 1) {
                                    return (
                                        <Tag color="purple"> {data.name} </Tag>
                                    );
                                } else if (data.id === 59) {
                                    return (
                                        <Tag color="processing">
                                            {" "}
                                            {data.name}{" "}
                                        </Tag>
                                    );
                                } else if (data.id === 15) {
                                    return (
                                        <Tag color="pink"> {data.name} </Tag>
                                    );
                                } else if (data.id === 6) {
                                    return (
                                        <Tag color="warning"> {data.name} </Tag>
                                    );
                                } else if (data.id === 19) {
                                    return (
                                        <Tag color="yellow"> {data.name} </Tag>
                                    );
                                } else if (data.id === 28) {
                                    return (
                                        <Tag color="blue"> {data.name} </Tag>
                                    );
                                } else if (data.id === 34) {
                                    return (
                                        <Tag color="cyan"> {data.name} </Tag>
                                    );
                                } else if (data.id === 17) {
                                    return (
                                        <Tag color="gold"> {data.name} </Tag>
                                    );
                                }
                            })}
                        </p>
                        <p>Classement: {rating_top}</p>
                        <p>Note: {rating}</p>
                    </div>

                    <div style={{ color: "white", marginLeft: 100 }}>
                        <p>Plateforme:</p>
                        <p>Nb de notes: {ratings_count}</p>
                    </div>
                </div>
                {/* {short_screenshots.map((data) => {
                    return (
                        <Carousel arrows {...settings}>
                            <div>
                                <img
                                    src={data.image}
                                    alt="#"
                                    width="200"
                                    height="200"
                                />
                            </div>
                        </Carousel>
                    );
                })} */}
                {/* <Carousel arrows {...settings}>
                    <div>
                        <img
                            src={background_image}
                            alt="#"
                            width="200"
                            height="200"
                        />
                    </div>
                    <div>
                        <img
                            src={background_image}
                            alt="#"
                            width="200"
                            height="200"
                        />
                    </div>
                    <div>
                        <img
                            src={background_image}
                            alt="#"
                            width="200"
                            height="200"
                        />
                    </div>
                    <div>
                        <img
                            src={background_image}
                            alt="#"
                            marginLeft="300"
                            width="500"
                            height="200"
                        />
                    </div>
                </Carousel> */}
            </Modal>
        </>
    );
}
