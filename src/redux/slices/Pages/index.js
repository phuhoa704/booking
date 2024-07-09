import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pages: [],
    pageDetail: {}
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        savePages: (state, action) => {
            state.pages = action.payload;
        },
        savePageDetail: (state, action) => {
            state.pageDetail = action.payload;
        }
    }
})

export const { savePages, savePageDetail } = pagesSlice.actions;
export default pagesSlice.reducer;