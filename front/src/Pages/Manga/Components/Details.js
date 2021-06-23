import React from "react";
import { Modal } from "antd";

export default function Details({ handleClose, open, detailsData }) {
    const { score, title, airing_start } = detailsData;
    return (
        <>
            <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
                <p>Titre originale: {title}</p>
                <p>Score: {score}</p>
                <p>Date début: {airing_start}</p>
                {/* console.log(event.toLocaleDateString(undefined, options)); */}

            </Modal>
        </>
    );
}
