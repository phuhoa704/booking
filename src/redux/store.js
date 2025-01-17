import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/Auth';
import loading from './slices/Loading';
import location from './slices/Location';
import news from './slices/News';
import search from './slices/Search';
import order from './slices/Orders';
import routes from './slices/Routes';
import comments from './slices/Comments';
import settings from './slices/Settings';
import address from './slices/Address';
import pages from './slices/Pages';

export const store = configureStore({
    reducer: {
        auth,
        loading,
        location,
        news,
        search,
        order,
        routes,
        comments,
        settings,
        address,
        pages
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
})
