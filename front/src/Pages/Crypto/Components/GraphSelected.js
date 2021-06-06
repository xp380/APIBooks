import React from 'react'
import { Modal } from 'antd'
import { Line } from 'react-chartjs-2'

export const GraphSelected = ({ detailsData, handleClickClose, open }) => {
    const { last_updated, total_volume, current_price, name } = detailsData;

    let date = [last_updated]
    let volume = [total_volume]
    let price = [current_price]
    // let titre = [name]

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
        <Modal onOk={handleClickClose} onCancel={handleClickClose} visible={open}>
            <Line data={data}></Line>
        </Modal>
    )
}

export default GraphSelected