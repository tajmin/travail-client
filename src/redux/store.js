import { configureStore } from '@reduxjs/toolkit';
import jobReducers from './slices/jobSlice'

export const store = configureStore({
    reducer: {
        jobs: jobReducers
    },
})