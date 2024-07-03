import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    settings: [],
    settingDetail: {}
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        saveSettings: (state, action) => {
            state.settings = action.payload;
        },
        saveSettingDetail: (state, action) => {
            state.settingDetail = action.payload;
        }
    }
})

export const { saveSettings, saveSettingDetail } = settingsSlice.actions;
export default settingsSlice.reducer;