export const API = 'https://id.vexere.cuongdev.click/api';
export const API_STORE = 'https://id.vexere.cuongdev.click';

export const ENDPOINTS = {
    //AUTH
    LOGIN: '/login',
    LOGOUT: '/logout',
    REGISTER: '/register',
    PROFILE: '/profile',
    CHANGEPASSWORD: '/change-password',
    UPDATEPROFILE: '/update-profile',
    UPDATEAVATAR: '/update-avatar',
    //LOCATION
    PROVINCE: '/provinces',
    DISTRICT: '/districts', //${provinceId}
    WARD: '/ward', //${districtId}
    //NEWS
    CATEGORYLIST: '/news-categories', //&page=&page_size=
    CATEGORYDETAIL: '/news-categories/detail', //${id}
    NEWSLIST: '/news', //&page=&page_size=
    NEWSDETAIL: '/news/detail', //${id}
    //SEARCH
    SEARCH: '/search', //&page=&page_size=&departure_province_id=&return_province_id=&state_date=&return_date=&sort=
    //ORDER
    ORDER: '/order',
    LISTORDER: '/orders',
    COMPLETEDORDER: '/orders/completed',
    CANCELEDORDER: '/orders/canceled',
    SHOWORDER: '/orders/show', //${id}
    CANCELORDER: '/orders/cancel', //${id}
    LOOKPUPORDER: '/orders/look-up'
}