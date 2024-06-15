import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listCategory: [],
    detailCategory: {},
    listNews: [],
    detailNews: {}
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        saveListCategory: (state, action) => {
            state.listCategory = action.payload;
        },
        saveDetailCategory: (state, action) => {
            state.detailCategory = action.payload;
        },
        saveListNews: (state, action) => {
            state.listNews = action.payload;
        },
        saveDetailNews: (state, action) => {
            state.detailNews = action.payload;
        }
    }
})

export const { saveListCategory, saveDetailCategory, saveListNews, saveDetailNews } = newsSlice.actions;
export default newsSlice.reducer;