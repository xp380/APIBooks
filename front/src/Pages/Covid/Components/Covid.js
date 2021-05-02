import React from 'react'

export const Covid = ({ covid }) => {
    const { Confirmed, Deaths, Recovered, Active, Date } = covid;
    return(
        <>
        <h3>Date: {Date}</h3>
        <p>Confirmés: {Confirmed}</p>
        <p>Morts: {Deaths}</p>
        <p>Rétablis: {Recovered}</p>
        <p>Active: {Active}</p>
        </>
    ) 
}