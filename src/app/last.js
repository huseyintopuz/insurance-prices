import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api/index';

const slice = createSlice({
    name: 'prices',
    initialState: {
        products: [],
        products2: [],
        offerCount: 0,
        getOffers: [],
        isLoading: false,
        isLoading2: false,
        isLoading3: false,
        isLoading4: false,
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
        startLoading3: (state, action) => {
            state.isLoading3 = true;
        },
        getOfferCount: (state, action) => {
            state.offerCount = action.payload;
            state.isLoading3 = false;
        },
        hasErrror3: (state, action) => {
            state.error = action.payload;
            state.isLoading3 = false;
        },
        startLoading4: (state, action) => {
            state.isLoading4 = true;
        },
        newOffer: (state, action) => {
            state.getOffers = action.payload;
            state.isLoading4 = false;
        },
        hasError4: (state, action) => {
            state.error = action.payload;
            state.isLoading4 = false;
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
    startLoading3,
    hasError3,
    newOffer,
    startLoading4,
    hasError4
} = slice.actions;

export const fetchProducts = () => async dispatch => {
    dispatch(startLoading());
    dispatch(startLoading2());
    dispatch(startLoading3());
    dispatch(startLoading4());
    try {
        await api.get('/case1')
            .then((response) => dispatch(getProducts(response.data.offerList)))
        await api.get('/case2')
            .then((response) => dispatch(getProducts2(response.data.offerList)))
        await api.get('/get_offer_count')
            .then((response) => {
                dispatch(getOfferCount(response.data.num_offers));
                // let productsToShow = Object.freeze([]);
                const newArray = new Array(response.data.num_offers).fill(null);
                // console.log('heyy', newArray);
                newArray.map(async (_x) => await api.get('/case3')
                    .then((response) => {
                        // console.log('showw', response.data)
                       newArray.push(response.data);
                       const productsToShow = newArray.filter(function (el) {
                        return el !== null;
                       })
                       console.log('aaaa', productsToShow);
                       dispatch(newOffer(productsToShow));
                    }));
                
                
            })

    }
    catch (e) {
        dispatch(hasError(e.message));
        dispatch(hasError2(e.message));
        dispatch(hasError3(e.message));
        dispatch(hasError4(e.message));
    }
}

export default slice.reducer




