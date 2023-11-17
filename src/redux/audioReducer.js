import { createSlice } from "@reduxjs/toolkit";


const audioInitialState = {
    playing: false
}

export const audioSlice = createSlice({
    name: 'audio',
    initialState: audioInitialState,
    reducers: {
        toggleAudio: (state) => {
            state.playing = !state.playing;
        },
    },
});

export const { toggleAudio } = audioSlice.actions;

export default audioSlice.reducer