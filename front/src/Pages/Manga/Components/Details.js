import React from 'react'
import { Modal } from 'antd'

export default function Details({ handleClose, open, detailsData}) {
    const {
          score, title, start_date, end_date
    } = detailsData

    return(
        <>
        <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
            <p>Titre originale: {title}</p>
            <p>Score: {score}</p>
            <p>Date début: {start_date}</p>
            <p>Date fin: {end_date}</p>
        </Modal>
        </>
    )
}