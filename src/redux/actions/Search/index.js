import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { saveSearchResult } from "../../slices/Search";

export const searchResult = createAsyncThunk(
    'search/searchResult',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.SEARCH}?page=${data.page ? data.page : ''}&page_size=${data.page_size ? data.page_size : ''}&departure_province_id=${data.first_province ? data.first_province : ''}&return_province_id=${data.second_province ? data.second_province : ''}&start_date=${data.start_date ? data.start_date : ''}&return_date=${data.return_date ? data.return_date : ''}&sort=${data.sort ? data.sort : ''}`)
            if(res.data.result) {
                thunky.dispatch(saveSearchResult(res.data.data));
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