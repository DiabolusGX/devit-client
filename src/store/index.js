import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import activate from './activateSlice';
import user from './userSlice';
import rooms from './roomsSlice';
export const store = configureStore({
    reducer: {
        auth,
        activate,
        user,
        rooms,
    },
});
