import { configureStore } from '@reduxjs/toolkit';
import audioReducer from './audioReducer';


export const store = configureStore({
    reducer: {
        audio: audioReducer,
    },
});