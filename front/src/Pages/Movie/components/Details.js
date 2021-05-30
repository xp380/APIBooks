import React from 'react'
import { Modal } from 'antd'

export default function Details({ handleClose, open, detailsData}) {
    const {
        original_language, original_title, overview, release_date
    } = detailsData

    return(
        <>
        <Modal onCancel={handleClose} visible={open}>
            <p>Langue originale: {original_language}</p>
            <p>Titre originale: {original_title}</p>
            <p>Résumé:{overview}</p>
            <p>Date de sortie: {release_date}</p>
            <p></p>
        </Modal>
        </>
    )
}