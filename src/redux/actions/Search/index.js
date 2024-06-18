import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { saveSearchDetail, saveSearchResult } from "../../slices/Search";

export const getSearchResult = createAsyncThunk(
    'search/getSearchResult',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.SEARCH}?page=${data.page ? data.page : ''}&page_size=${data.page_size ? data.page_size : ''}&departure_province_id=${data.departure_province_id ? data.departure_province_id : ''}&return_province_id=${data.return_province_id ? data.return_province_id : ''}&start_date=${data.start_date ? data.start_date : ''}&return_date=${data.return_date ? data.return_date : ''}&sort=${data.sort ? data.sort : ''}`)
            if(res.data.result) {
                thunky.dispatch(hideLoading())
                thunky.dispatch(saveSearchResult(res.data.data.data));
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

export const getSearchDetail = createAsyncThunk(
    'search/getSearchDetail',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.SEARCHDETAIL}/${data}`)
            if(res.data.result) {
                thunky.dispatch(hideLoading())
                thunky.dispatch(saveSearchDetail(res.data.data));
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