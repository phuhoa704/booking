import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { Toast } from "../../../components/Alert/Toast";
import { saveComments } from "../../slices/Comments";

export const getComments = createAsyncThunk(
    'comments/getComments',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.COMMENTS}/${data.company_id}?hasComment=${(data.hasComment === 1) ? data.hasComment : ''}&hasImage=${(data.hasImage === 1) ? data.hasImage : ''}&ratting5=${(data.rating5 === 1) ? data.rating5 : ''}&ratting4=${(data.rating4 === 1) ? data.rating4 : ''}&ratting3=${(data.rating3 === 1) ? data.rating3 : ''}&ratting2=${(data.rating2 === 1) ? data.rating2 : ''}&ratting1=${(data.rating1 === 1) ? data.rating1 : ''}`)
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveComments(res.data));
                return {
                    action: true,
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading())
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)

export const postComment = createAsyncThunk(
    'comments/postComment',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(`${ENDPOINTS.POSTCOMMENT}/${data.company_id}`, data.data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                return {
                    action: true
                }
            }
        }catch(err){
            console.log(err);
            thunky.dispatch(hideLoading())
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
        }
    }
)