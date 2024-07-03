import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { saveSettingDetail, saveSettings } from "../../slices/Settings";

export const getSettings = createAsyncThunk(
    'settings/getSettings',
    async(data, thunky) => {
        try{
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.SETTINGSLIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveSettings(res.data.data));
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

export const getSettingDetail = createAsyncThunk(
    'settings/getSettingDetail',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.SETTINGDETAIL}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveSettingDetail(res.data.data));
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