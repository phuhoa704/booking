import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { API, ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { savePageDetail, savePages } from "../../slices/Pages";

export const getPageList = createAsyncThunk(
    'pages/getPageList',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.PAGES);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(savePages(res.data.data));
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

export const getPageDetail = createAsyncThunk(
    'pages/getPageDetail',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.PAGESDETAIL}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(savePageDetail(res.data.data));
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