export const API = 'https://adminvexere.cuongdesign.net/api';
export const API_STORE = 'https://adminvexere.cuongdesign.net';

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
    WARD: '/wards', //${districtId}
    //NEWS
    CATEGORYLIST: '/news-categories', //&page=&page_size=
    CATEGORYDETAIL: '/news-categories/detail', //${id}
    NEWSLIST: '/news', //&page=&page_size=
    NEWSDETAIL: '/news/detail', //${id}
    //SEARCH
    SEARCH: '/search', //&page=&page_size=&departure_province_id=&return_province_id=&state_date=&return_date=&sort=
    SEARCHDETAIL: '/detail',
    //ORDER
    ORDER: '/order',
    LISTORDER: '/orders',
    COMPLETEDORDER: '/orders/completed',
    CANCELEDORDER: '/orders/canceled',
    SHOWORDER: '/orders/show', //${id}
    CANCELORDER: '/orders/cancel', //${id}
    LOOKPUPORDER: '/orders/look-up',
    //PAYMENT
    PAYMENT: '/onepay/payment?order_code=', //${order_code}
    //ROUTES
    ROUTES: '/routes',
    //COMMENTS
    COMMENTS: '/comments', //${company_id}?hasComment=&hasImage=&ratting5=&ratting4=&ratting3=&ratting2=1&ratting1=
    POSTCOMMENT: '/comments/store', //${company_id}
    //SETTINGS
    SETTINGSLIST: '/settings',
    SETTINGDETAIL: '/settings/detail', //${key}
}