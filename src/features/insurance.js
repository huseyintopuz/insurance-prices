import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://snetmyapp.herokuapp.com';

const initialState = {
    loading: false,
    prices: [],
    error: '',
}

export const fetchPrices = createAsyncThunk('price/fetchPrice', () => {
    return axios
        .get(`${API_URL}/case1`)
        .then(response => response.data)
})

const priceSlice = createSlice({
    name: 'prices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchPrices.pending, (state) => {
            state.products = [];
            state.loading = "loading";
        });
        builder.addCase(
            fetchPrices.fulfilled, (state, { payload }) => {
                state.products = payload;
                state.loading = "loaded";
            });
        builder.addCase(
            fetchPrices.rejected, (state, action) => {
                state.loading = "error";
                state.error = action.error.message;
            });
    }
})

export default priceSlice.reducer;