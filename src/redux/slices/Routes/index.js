import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    routes: []
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        saveRoutes: (state, action) => {
            state.routes = action.payload;
        }
    }
})

export const { saveRoutes } = routesSlice.actions;
export default routesSlice.reducer;