import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { API, ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { saveBookingOrder, saveOrderCanceled, saveOrderCompleted, saveOrderDetail, saveOrderList } from "../../slices/Orders";

export const lookupOrder = createAsyncThunk(
    'order/lookupOrder',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.LOOKPUPORDER, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                thunky.dispatch(saveOrderDetail(res.data.data));
                thunky.dispatch(saveBookingOrder(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveOrderDetail({}));
                Toast.fire({
                    title: res.data.message,
                    icon: 'error'
                })
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const listOrder = createAsyncThunk(
    'order/listOrder',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.LISTORDER);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveOrderList(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveOrderList([]));
                return {
                    action: false
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const listOrderCompleted = createAsyncThunk(
    'order/listOrderCompleted',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.COMPLETEDORDER);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveOrderCompleted(res.data.data));
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const listOrderCanceled = createAsyncThunk(
    'order/listOrderCanceled',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.CANCELEDORDER);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveOrderCanceled(res.data.data));
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const showOrder = createAsyncThunk(
    'order/showOrder',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.SHOWORDER}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                thunky.dispatch(saveOrderDetail(res.data.data));
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const booking = createAsyncThunk(
    'order/booking',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.ORDER, data);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                thunky.dispatch(saveBookingOrder(res.data.data));
                if(data.payment_method === 2) {
                    window.location.replace(`${API}${ENDPOINTS.PAYMENT}${res.data.data.order_code}`);
                }
                return {
                    action: true,
                    data: res.data.data
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)