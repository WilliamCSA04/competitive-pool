import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    topLoader: 0,
    jungleLoader: 0,
    midLoader: 0,
    adcLoader: 0,
    supLoader: 0,
  },
  reducers: {
    load: (state, action) => {
      state[action] += 1;
    },
    unload: (state, action) => {
      state[action] -= 1;
    },
  },
});

export const { load, unload } = loaderSlice.actions;

export default loaderSlice.reducer;
