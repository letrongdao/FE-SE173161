import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    contacts: [],
    error: ''
}

export const fetchContacts = createAsyncThunk('contact/fetchContacts', () => {
    return axios
    .get('https://64e5781c09e64530d17e95b3.mockapi.io/contacts')
    .then(response => response.data)
})

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchContacts.fulfilled, (state,action) => {
            state.loading = false
            state.contacts = action.payload
            state.error = ''
        })

        builder.addCase(fetchContacts.rejected, (state,action) => {
            state.loading = false
            state.contacts = []
            state.error = action.error.message
        })
    }
})

export default contactSlice.reducer