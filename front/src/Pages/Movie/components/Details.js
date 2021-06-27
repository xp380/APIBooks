import React from "react";
import { Modal } from "antd";

export default function Details({ handleClose, open, detailsData, }) {
    const { original_language, original_title, overview, release_date, poster_path } =
        detailsData;

    return (
        <>
            <Modal onOk={handleClose} onCancel={handleClose} visible={open} width={800} footer={null}
                bodyStyle={{
                    backgroundColor: '#212121'
                }}

                maskStyle={{ backgroundColor: "inherit" }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <p style={{ marginTop: 20 }}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt="#"
                            width="200"
                            height="200"
                        />
                    </p>
                    <p style={{ flex: 1, marginRight: 50, color: "whitesmoke" }}> {original_title}</p>
                    <p style={{ flex: 1, alignSelf: 'flex-start', color: "whitesmoke", marginRight: 70 }}>Langue originale: {original_language}</p>
                    {/* <p >Résumé:{overview}</p>
                    <p >Date de sortie: {release_date}</p> */}
                </div>
            </Modal>
        </>
    );
}
