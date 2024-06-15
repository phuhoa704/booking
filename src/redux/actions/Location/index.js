import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { saveDistricts, saveProvinces, saveWards } from "../../slices/Location";
import { Toast } from "../../../components/Alert/Toast";

export const getProvinces = createAsyncThunk(
    'location/getProvinces',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.PROVINCE);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveProvinces(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveProvinces([]));
                return {
                    action: false
                }
            }
        }catch(err){
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const getDistricts = createAsyncThunk(
    'location/getDistricts',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.DISTRICT);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveDistricts(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveDistricts([]));
                return {
                    action: false
                }
            }
        }catch(err){
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const getWards = createAsyncThunk(
    'location/getWards',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.WARD);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveWards(res.data.data));
                return {
                    action: true
                }
            } else {
                thunky.dispatch(saveWards([]));
                return {
                    action: false
                }
            }
        }catch(err){
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)