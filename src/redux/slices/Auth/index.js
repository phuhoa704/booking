import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            state.user = action.payload;
        },
        resetUser: () => initialState
    }
})

export const { saveUser, resetUser } = authSlice.actions;
export default authSlice.reducer;