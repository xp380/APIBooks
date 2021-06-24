import React from 'react'
import { Modal } from 'antd'
import { Bar } from 'react-chartjs-2'

export const GraphSelected = ({ detailsData, handleClose, open }) => {
    const { last_updated, high_24h, low_24h, name } = detailsData;

    let date = [last_updated]
    let high = [high_24h]
    let low = [low_24h]
    // let volume = [total_volume]
    // let price = [current_price]

    const data = {
        labels: date,
        datasets: [
            {
                label: "Prix Élevé",
                data: high,
                backgroundColor: "Blue",
                borderWidth: 6,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            },
            {
                label: 'Prix Bas',
                data: low,
                backgroundColor: "Red",
                borderWidth: 6,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            },
        ]
    };

    return (
        <Modal title={name} onOk={handleClose} onCancel={handleClose} visible={open} width={1000}>
            <Bar data={data} ></Bar>
        </Modal>
    )
}

export default GraphSelected