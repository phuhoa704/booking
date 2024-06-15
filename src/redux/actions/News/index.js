import { createAsyncThunk } from "@reduxjs/toolkit";
import { hideLoading, showLoading } from "../../slices/Loading";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { saveDetailCategory, saveDetailNews, saveListCategory, saveListNews } from "../../slices/News";
import { Toast } from "../../../components/Alert/Toast";

export const getListCategory = createAsyncThunk(
    'news/getListCategory',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.CATEGORYLIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveListCategory(res.data.data.data));
                return {
                    action: true
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

export const getDetailCategory = createAsyncThunk(
    'news/getDetailCategory',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.CATEGORYDETAIL);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveDetailCategory(res.data.data));
                return {
                    action: true
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

export const getListNews = createAsyncThunk(
    'news/getListNews',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.NEWSLIST);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveListNews(res.data.data.data));
                return {
                    action: true
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

export const getDetailNews = createAsyncThunk(
    'news/getDetailNews',
    async(data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(`${ENDPOINTS.NEWSDETAIL}/${data}`);
            thunky.dispatch(hideLoading());
            if(res.data.result) {
                thunky.dispatch(saveDetailNews(res.data.data));
                return {
                    action: true
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