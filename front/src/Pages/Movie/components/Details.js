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
    const modalbody = {
        backgroundColor: "#212121"
    };
    const modalmask = { backgroundColor: "inherit" };
    const titre = {
        color: "white",
        fontFamily: "Impact, fantasy"
    };
    const image = {
        display: "flex",
        alignItems: "center",
        fontFamily: "Impact, fantasy"
    };
    const styles = { marginLeft: 50, color: "white" };
    return (
        <>
            <Modal
                onOk={handleClose}
                onCancel={handleClose}
                visible={open}
                width={1000}
                footer={null}
                bodyStyle={modalbody}
                maskStyle={modalmask}
            >
                <h3 style={titre}>{original_title}</h3>
                <div style={image}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt="#"
                        width="200"
                        height="200"
                    />
                    <div style={styles}>
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
