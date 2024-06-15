import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderList: [],
    orderDetail: {},
    orderCompleted: [],
    orderCanceled: []
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        saveOrderList: (state, action) => {
            state.orderList = action.payload;
        },
        saveOrderDetail: (state, action) => {
            state.orderDetail = action.payload;
        },
        saveOrderCompleted: (state, action) => {
            state.orderCompleted = action.payload;
        },
        saveOrderCanceled: (state, action) => {
            state.orderCanceled = action.payload;
        }
    }
})

export const { saveOrderList, saveOrderDetail, saveOrderCompleted, saveOrderCanceled } = orderSlice.actions;
export default orderSlice.reducer;