import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    hasComment: 0,
    hasImage: 0,
    total: 0,
    rating1: 0,
    rating2: 0,
    rating3: 0,
    rating4: 0,
    rating5: 0,
    avg: 0
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        saveComments: (state, action) => {
            state.comments = action.payload.data.data;
            state.hasComment = action.payload.countHasComment;
            state.hasImage = action.payload.countHasImage;
            state.total = action.payload.total;
            state.rating1 = action.payload.total1;
            state.rating2 = action.payload.total2;
            state.rating3 = action.payload.total3;
            state.rating4 = action.payload.total4;
            state.rating5 = action.payload.total5;
            state.avg = action.payload.avg;
        }
    }
})

export const { saveComments } = commentsSlice.actions;
export default commentsSlice.reducer;