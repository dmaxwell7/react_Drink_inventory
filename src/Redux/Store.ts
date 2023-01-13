import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './Slices/RootSlice';

export const Store = configureStore({
    reducer,
    devTools: true
})