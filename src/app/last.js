import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api/index';

const slice = createSlice({
    name: 'prices',
    initialState: {
        products: [],
        products2: [],
        offerCount: 0,
        offers: [],
        isLoading: false,
        isLoading2: false,
        error: ''
    },
    reducers: {
        startLoading: (state, action) => {
            state.isLoading = true;
        },
        getProducts: (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        },
        hasError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        startLoading2: (state, action) => {
            state.isLoading2 = true;
        },
        getProducts2: (state, action) => {
            state.products2 = action.payload;
            state.isLoading2 = false;
        },
        hasError2: (state, action) => {
            state.error = action.payload;
            state.isLoading2 = false;
        },
        getOfferCount: (state, action) => {
            state.offerCount = action.payload;
            // state.isLoading2 = false;
        },
        newOffer: (state, action) => {
            state.offers = action.payload;
            // state.isLoading2 = false;
        },
    },
});

const {
    getProducts,
    startLoading,
    hasError,
    getProducts2,
    startLoading2,
    hasError2,
    getOfferCount,
    newOffer
} = slice.actions;

export const fetchProducts = () => async dispatch => {
    dispatch(startLoading());
    dispatch(startLoading2());
    try {
        await api.get('/case1')
            .then((response) => dispatch(getProducts(response.data.offerList)))
        await api.get('/case2')
            .then((response) => dispatch(getProducts2(response.data.offerList)))
        await api.get('/get_offer_count')
            .then((response) => dispatch(getOfferCount(response.data)))
        await api.get('/case3')
            .then((response) => dispatch(newOffer(response.data)))
    }
    catch (e) {
        dispatch(hasError(e.message));
        dispatch(hasError2(e.message));
        return console.error(e.message);
    }
}

export default slice.reducer




