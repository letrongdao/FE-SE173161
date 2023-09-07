import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowDetails from './ShowDetails'

export default function FilmDetails() {
    const { id } = useParams()
    const [film, setFilm] = useState([])

    useEffect(() => {
        const data = fetch(
            `https://64e5781c09e64530d17e95b3.mockapi.io/films/${id}`)
            .then((res) => res.json())
            .then((json) => {
                setFilm(json)
            })
        console.log(data)
    }, [])

    return <ShowDetails film={film} />
}
