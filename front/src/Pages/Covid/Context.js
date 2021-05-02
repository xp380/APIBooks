import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const CovidContext = createContext()

export const CovidProvider = ({ children }) => {
    const [covids, setCovids ] = useState([])

    // useEffect(() => {
    //     axios
    //     .get("https://api.covid19api.com/total/dayone/country/france")
    //     .then(({ data }) => {
    //         setCovids(data)
    //         console.log(data)
    //     })
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.covid19api.com/total/dayone/country/france")
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