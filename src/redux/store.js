import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/Auth';

export const store = configureStore({
    reducer: {
        auth
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    devTools: process.env.NODE_ENV !== 'production',
})
