import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    provinces: [],
    districts: [],
    wards: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        saveProvinces: (state, action) => {
            state.provinces = action.payload;
        },
        saveDistricts: (state, action) => {
            state.districts = action.payload;
        },
        saveWards: (state, action) => {
            state.wards = action.payload;
        }
    }
})

export const { saveProvinces, saveDistricts, saveWards } = locationSlice.actions;
export default locationSlice.reducer;