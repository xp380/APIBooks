import React from 'react'

export const Manga = ({ manga }) => {
    const { rank, title, image_url, start_date, end_date } = manga
    return(
        <>
        <h3>{title}</h3>
        <p>{rank}</p>
        <p><img src={image_url} alt="manga" style= {{width: 100, height: 100 }}/></p>
        <p>{start_date}</p>
        <p>{end_date}</p>
        </>
    )
}