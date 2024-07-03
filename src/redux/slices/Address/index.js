import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    departureCustomAddress: {},
    departureDropAddress: {},
    useDepartureCustomAddress: false,
    useDepartureDropAddress: false,
    returnCustomAddress: {},
    returnDropAddress: {},
    useReturnCustomAddress: false,
    useReturnDropAddress: false
}

export const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        saveDptCustomAddress: (state, action) => {
            state.departureCustomAddress = action.payload;
        },
        saveUseDptCustomAddress: (state, action) => {
            state.useDepartureCustomAddress = action.payload;
        },
        saveReturnCustomAddress: (state, action) => {
            state.returnCustomAddress = action.payload;
        },
        saveUseReturnCustomAddress: (state, action) => {
            state.useReturnCustomAddress = action.payload;
        },
        saveDptDropAddress: (state, action) => {
            state.departureDropAddress = action.payload;
        },
        saveReturnDropAddress: (state, action) => {
            state.returnDropAddress = action.payload;
        },
        saveUseDptDropAddress: (state, action) => {
            state.useDepartureDropAddress = action.payload;
        },
        saveUseReturnDropAddress: (state, action) => {
            state.useReturnDropAddress = action.payload;
        }
    }
})

export const { saveDptCustomAddress, saveUseDptCustomAddress, saveReturnCustomAddress, saveUseReturnCustomAddress, saveDptDropAddress, saveReturnDropAddress, saveUseDptDropAddress, saveUseReturnDropAddress } = addressSlice.actions;
export default addressSlice.reducer;