import React from 'react'
import { Modal } from 'antd'
import { Bar } from "react-chartjs-2";

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
                borderWidth: 1
            },
            {
                label: "Nombre de morts",
                data: deaths,
                backgroundColor: "red",
                borderWidth: 1
            },
            {
                label: "Nombre de Rétablis",
                data: recovered,
                backgroundColor: "Green",
                borderWidth: 1
            },
        ]
    };

    return (
        <Modal onOk={handleClose} onCancel={handleClose} visible={open} width={1000}>
            <Bar data={data}></Bar>
        </Modal>
    )
}

export default GraphSelected;