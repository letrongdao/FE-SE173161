import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{textAlign: 'center'}}>
        <h1 style={{color: 'red'}}>NOT FOUND !</h1>
        <Link to='/'>Back to Films List</Link>
    </div>
  )
}
