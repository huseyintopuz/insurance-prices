import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import slice from './last';

export const store = configureStore({
  reducer: {
    products: slice,
  }
})

