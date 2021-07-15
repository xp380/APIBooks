import React from "react";
import { Modal, Tag } from "antd";

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
        // parent_platforms: [{ platform }],
        // short_screenshots,
        // parent_platforms,
        ratings_count
    } = detailsData;

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
                        marginLeft: 30,
                        fontWeight: "bold",
                        fontFamily: "Impact, fantasy"
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
                        <p
                            style={{
                                fontFamily: "Trebuchet MS, sans-serif",
                                fontWeight: "bold"
                            }}
                        >
                            {" "}
                            Date de sortie: {released}
                        </p>
                        <p
                            style={{
                                fontFamily: "Trebuchet MS, sans-serif",
                                fontWeight: "bold"
                            }}
                        >
                            Temps d'une partie: {playtime}
                        </p>

                        {/* <p>Plateforme: {slug}</p> */}
                        <p style={{ fontWeight: "bold" }}>
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
                        <p style={{ fontWeight: "bold" }}>
                            Classement: {rating_top}
                        </p>
                        <p style={{ fontWeight: "bold" }}>Note: {rating}</p>
                    </div>

                    <div style={{ color: "white", marginLeft: 100 }}>
                        <p style={{ fontWeight: "bold" }}>Plateforme:</p>
                        <p style={{ fontWeight: "bold" }}>
                            Nb de notes: {ratings_count}
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
}
