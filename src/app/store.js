import { configureStore } from '@reduxjs/toolkit';
import  priceSlice from '../features/insurance';

export const store = configureStore({
    reducer: {
        price: priceSlice,
    }
})