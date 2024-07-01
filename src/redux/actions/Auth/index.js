import { createAsyncThunk } from "@reduxjs/toolkit";
import httpRequest from "../../../httpRequest";
import { ENDPOINTS } from "../../../configs/apis";
import { hideLoading, showLoading } from "../../slices/Loading";
import { resetUser, saveUser } from "../../slices/Auth";
import { Toast } from "../../../components/Alert/Toast";
import { TOKEN, TYPE_TOPKEN } from "../../../configs/constants";

export const login = createAsyncThunk(
    'auth/login',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.LOGIN, data);
            if (res.data.result) {
                thunky.dispatch(hideLoading());
                window.localStorage.setItem(TOKEN, res.data.data.access_token);
                window.localStorage.setItem(TYPE_TOPKEN, res.data.data.type_token);
                thunky.dispatch(saveUser(res.data.data.information));
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                return {
                    action: true
                }
            } else {
                Toast.fire({
                    title: res.data.message,
                    icon: 'error'
                })
                thunky.dispatch(hideLoading());
                return {
                    action: false
                }
            }
        } catch (err) {
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.LOGOUT);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                window.localStorage.removeItem(TOKEN);
                window.localStorage.removeItem(TYPE_TOPKEN);
                thunky.dispatch(resetUser());
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                return {
                    action: true
                }
            } else {
                return {
                    action: false
                }
            }
        } catch (err) {
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.REGISTER, data);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                return {
                    action: true
                }
            } else {
                Toast.fire({
                    title: res.data.message,
                    icon: 'error'
                })
                thunky.dispatch(hideLoading());
                return {
                    action: false
                }
            }
        } catch (err) {
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const profile = createAsyncThunk(
    'auth/profile',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.get(ENDPOINTS.PROFILE);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                thunky.dispatch(saveUser(res.data.data));
                return {
                    action: true
                }
            } else {
                return {
                    action: false
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
)

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (data, thunky) => {
        if (data.new_password === data.confirm_new_password) {
            try {
                thunky.dispatch(showLoading());
                const res = await httpRequest.post(ENDPOINTS.CHANGEPASSWORD, data);
                thunky.dispatch(hideLoading());
                if (res.data.result) {
                    Toast.fire({
                        title: res.data.message,
                        icon: 'success'
                    })
                    return {
                        action: true
                    }
                } else {
                    Toast.fire({
                        title: res.data.message,
                        icon: 'error'
                    })
                    return {
                        action: false
                    }
                }
            } catch (err) {
                thunky.dispatch(hideLoading());
                Toast.fire({
                    title: err.response.data.message,
                    icon: 'error'
                })
                console.log(err);
            }
        } else {
            Toast.fire({
                title: 'Mật khẩu không trùng khớp',
                icon: 'error'
            })
        }
    }
)

export const updateProfile = createAsyncThunk(
    'auth/updateProfile',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.UPDATEPROFILE, data);
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                thunky.dispatch(profile({}));
                return {
                    action: true
                }
            } else {
                Toast.fire({
                    title: res.data.message,
                    icon: 'error'
                })
                return {
                    action: false
                }
            }
        } catch (err) {
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)

export const updateAvatar = createAsyncThunk(
    'auth/updateAvatar',
    async (data, thunky) => {
        try {
            thunky.dispatch(showLoading());
            const res = await httpRequest.post(ENDPOINTS.UPDATEAVATAR, data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            thunky.dispatch(hideLoading());
            if (res.data.result) {
                Toast.fire({
                    title: res.data.message,
                    icon: 'success'
                })
                thunky.dispatch(profile({}));
                return {
                    action: true
                }
            } else {
                Toast.fire({
                    title: res.data.message,
                    icon: 'error'
                })
                return {
                    action: false
                }
            }
        } catch (err) {
            thunky.dispatch(hideLoading());
            Toast.fire({
                title: err.response.data.message,
                icon: 'error'
            })
            console.log(err);
        }
    }
)