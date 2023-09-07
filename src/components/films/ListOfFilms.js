import React, { useEffect, useState } from "react"
import Films from "./Films"

export default function ListOfFilms() {
    const [items, setItems] = useState([])

    const fetchFilms = () => {
        const data = fetch(
            "https://64e5781c09e64530d17e95b3.mockapi.io/films")
            .then((res) => res.json())
            .then((json) => {
                setItems(json)
            })
        console.log(data)
    }

    useEffect(() => {
        fetchFilms();
    }, [])

    return (
        <Films films={items} />
    );
}
