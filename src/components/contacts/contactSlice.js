import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numbOfContacts: 10
}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        registered: state => {
            state.numbOfContacts++
        },
        unregistered: state => {
            state.numbOfContacts--
        }
    }
})

export default contactSlice.reducer
export const { registered, unregistered } = contactSlice.actions