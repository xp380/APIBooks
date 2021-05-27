import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const CovidContext = createContext()

export const CovidProvider = ({ children }) => {
    const [covids, setCovids] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.covid19api.com/total/country/france")
            setCovids(result.data)
        }
        fetchData()
    }, [])

    const contextValues = {
        covids,
        setCovids
    }

    return <CovidContext.Provider value={contextValues}>{children}</CovidContext.Provider>
}