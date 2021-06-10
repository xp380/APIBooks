import React from "react";
import { Modal } from "antd";

export default function Details({ handleClose, open, detailsData, genres }) {
    const { original_language, original_title, overview, release_date } =
        detailsData;

    return (
        <>
            <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
                <p>Langue originale: {original_language}</p>
                <p>Titre originale: {original_title}</p>
                <p>Résumé:{overview}</p>
                {/* {detailsData.genre_ids.map((id) => {
                    return <p>{genres[id]}</p>;
            })}
                <p>Genres: </p> */}

                <p>Date de sortie: {release_date}</p>
            </Modal>
        </>
    );
}
