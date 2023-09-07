import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from './userSlice'
import Navbar from '../navbar/Navbar'

export default function User() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <Navbar />
            <h1>List of users:</h1>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                        <li key={user.id}>{user.firstName}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}