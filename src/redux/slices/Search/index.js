import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchResult: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchResult: (state, action) => {
            state.searchResult = action.payload;
        }
    }
})

export const { saveSearchResult } = searchSlice.actions;
export default searchSlice.reducer;