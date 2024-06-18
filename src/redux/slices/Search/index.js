import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResult: [],
    searchDetail: {}
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
        }
    }
})

export const { saveSearchResult, saveSearchDetail } = searchSlice.actions;
export default searchSlice.reducer;