import React from 'react'
import { Modal } from 'antd'

export default function Details({ handleClose, open, detailsData}) {
    const {
        released, background_image, tags: [{ slug }] 
    } = detailsData

    return(
        <>
        <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
            {/* <p>Nom: {name}</p> */}
            <p>Date de sortie: {released}</p>
            <img src={background_image} alt="#" width="200" height="200" />
            <p>{slug}</p>
        </Modal>
        </>
    )
}