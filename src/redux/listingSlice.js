import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getListingsAsync = createAsyncThunk('/listings/getListings', async () => {
    const res = await fetch(`https://students-app-back-production.up.railway.app/listings`)
    if (res.ok) {
        const data = await res.json()
        return { data }
    }
})
export const getListingAsync = createAsyncThunk('/todos/getListing', async (payload) => {
    const res = await fetch(`https://students-app-back-production.up.railway.app/listing/${payload.id}`)
    if (res.ok) {
        const listing = await res.json()
        return { listing }
    }
})

export const isBookedAsync = createAsyncThunk('/listing/isBookedListingAsync', async (payload) => {
    const res = await fetch(`https://students-app-back-production.up.railway.app/listing/${payload.id}/book`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({isBooked: payload.isBooked, bookedDate: payload.bookedDate})
    })
    if (res.ok) {
        const listing = await res.json()
        return { listing }
    }
})
export const isFavoriteAsync = createAsyncThunk('/listing/isFavoriteListingAsync', async (payload) => {
    const res = await fetch(`https://students-app-back-production.up.railway.app/listing/${payload.id}/favorite`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({isFavorite: payload.isFavorite})
    })
    if (res.ok) {
        const listing = await res.json()
        return { listing }
    }
})

const listingSlice = createSlice({
    name: 'listings',
    initialState: [
    ],
    reducers: {
    },
    extraReducers: {
        [getListingsAsync.fulfilled]: (state, action) =>{
            return action.payload?.data
        } ,
        [getListingsAsync.rejected]: (state, action) => "error finding listings",
        [getListingAsync.fulfilled]: (state, action) => action.payload?.listing,
        [isBookedAsync.fulfilled]: (state, action) => {
            state.isBooked = action.payload.listing.isBooked
            state.bookedDate = action.payload.listing.bookedDate
        },
        [isFavoriteAsync.fulfilled]: (state, action) => {
            const isFavoriteIndex = state.findIndex((l) => l.id === action.payload.listing.id)
            state[isFavoriteIndex].isFavorite = action.payload.listing.isFavorite
        },
    }
})

export default listingSlice.reducer