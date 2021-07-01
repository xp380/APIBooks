import React from "react";
import { Modal } from "antd";

export default function Details({ handleClose, open, detailsData }) {
    const {
        original_language,
        original_title,
        overview,
        release_date,
        poster_path,
        vote_average,
        popularity,
        vote_count
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
                maskStyle={{ backgroundColor: "inherit" }}
            >
                <h3
                    style={{
                        color: "white",
                        fontFamily: "Impact, fantasy"
                    }}
                >
                    {original_title}
                </h3>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Impact, fantasy"
                    }}
                >
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt="#"
                        width="200"
                        height="200"
                    />
                    <div style={{ marginLeft: 50, color: "white" }}>
                        <p>Langue originale: {original_language}</p>
                        <p>Date de sortie: {release_date}</p>
                        <p>Note moyenne: {vote_average}</p>
                        <p>Nb de votes: {vote_count}</p>
                        <p>Popularité: {popularity}</p>
                        <p>Résumé:{overview}</p>
                    </div>
                </div>
            </Modal>
        </>
    );
}
