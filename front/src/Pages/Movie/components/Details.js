import React from 'react'
import { Modal } from 'antd'
import { Doughnut } from 'react-chartjs-2'

export default function Details({ handleClose, open, detailsData }) {
    const {
        original_language, original_title, overview,
        release_date, popularity, vote_count
    } = detailsData
    let date = [release_date]
    let pop = [popularity]
    let rate = [vote_count]

    const data = {
        labels: date,
        datasets: [
            {
                label: "Popularité",
                data: [pop, rate],
                backgroundColor: "Blue",
            },
            // {
            //     label: "Critiques",
            //     data: rate,
            //     backgroundColor: "Red",
            // }
        ]
    };
    return (
        <>
            <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
                {/* <p>Langue originale: {original_language}</p>
            <p>Titre originale: {original_title}</p>
            <p>Résumé:{overview}</p>
            <p>Date de sortie: {release_date}</p> */}
                <Doughnut data={data}></Doughnut>
            </Modal>
        </>
    )
}