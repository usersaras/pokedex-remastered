import React from 'react'
import { useState, useEffect, useReducer } from "react";

export default function useFetch(url) {

    const [data, setData] = useState([]);

    const fetchData = async(url) => {
        const response = await fetch(url);
        const fetchData = await response.json();

        setData(fetchData)
    }

    useEffect(()=>{
        fetchData(url)
    }, [])

    return {data}
}
