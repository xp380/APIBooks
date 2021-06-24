import React from 'react'
import { Modal } from 'antd'
import { Line } from 'react-chartjs-2'

export const GraphSelected = ({ detailsData, handleClose, open }) => {
    const { last_updated, total_volume, current_price } = detailsData;

    let date = [last_updated]
    let volume = [total_volume]
    let price = [current_price]

    const data = {
        labels: date,
        datasets: [
            {
                label: "quantité totale",
                data: volume,
                backgroundColor: "Blue",
            },
            {
                label: 'Prix actuel',
                data: price,
                borderColor: "Black"
            },

        ]
    };

    return (
        <Modal onOk={handleClose} onCancel={handleClose} visible={open}>
            <Line data={data}></Line>
        </Modal>
    )
}

export default GraphSelected