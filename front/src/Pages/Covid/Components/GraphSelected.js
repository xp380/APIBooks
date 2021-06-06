import React from 'react'
import { Modal } from 'antd'
import { Line } from "react-chartjs-2";

export const GraphSelected = ({ detailsData, handleClose, open }) => {
    const { Confirmed, Recovered, Deaths, Date } = detailsData

    let date = [Date]
    let confirmed = [Confirmed]
    let deaths = [Deaths]
    let recovered = [Recovered]

    const data = {
        labels: date,
        datasets: [
            {
                label: "Nombre de confirmés",
                data: confirmed,
                backgroundColor: "Blue",
            },
            {
                label: "Nombre de morts",
                data: deaths,
                borderColor: "Black"
            },
            {
                label: "Nombre de Rétablis",
                data: recovered,
                borderColor: "Green"
            },
        ]
    };

    return (
        <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
            <Line data={data}></Line>
        </Modal>
    )
}

export default GraphSelected;