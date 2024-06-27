import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResult: [],
    searchDetail: {},
    searchParams: {},
    departureQuantity: 0,
    returnQuantity: 0,
    departurePickup: 0,
    departureDrop: 0,
    returnPickup: 0,
    returnDrop: 0,
    returnDetail: {}
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        saveSearchDetail: (state, action) => {
            state.searchDetail = action.payload;
        },
        saveSearchParams: (state, action) => {
            state.searchParams = action.payload;
        },
        saveDepartureQuantity: (state, action) => {
            state.departureQuantity = action.payload;
        },
        saveReturnQuantity: (state, action) => {
            state.returnQuantity = action.payload;
        },
        saveReturnDetail: (state, action) => {
            state.returnDetail = action.payload;
        },
        saveDeparture: (state, action) => {
            state.departurePickup = action.payload.pickup;
            state.departureDrop = action.payload.drop;
        },
        saveReturn: (state, action) => {
            state.returnPickup = action.payload.pickup;
            state.returnDrop = action.payload.drop;
        },
        resetSearchState: (state) => initialState
    }
})

export const { saveSearchResult, saveSearchDetail, saveSearchParams, saveDepartureQuantity, saveReturnQuantity, saveReturnDetail, saveDeparture, saveReturn, resetSearchState } = searchSlice.actions;
export default searchSlice.reducer;