import { createSlice } from '@reduxjs/toolkit';

export const LOADER_KEYS = {
  TOP_LOADER: 'topLoader',
  JUNGLE_LOADER: 'jungleLoader',
  MID_LOADER: 'midLoader',
  ADC_LOADER: 'adcLoader',
  SUP_LOADER: 'supLoader',
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    [LOADER_KEYS.TOP_LOADER]: 0,
    [LOADER_KEYS.JUNGLE_LOADER]: 0,
    [LOADER_KEYS.MID_LOADER]: 0,
    [LOADER_KEYS.ADC_LOADER]: 0,
    [LOADER_KEYS.SUP_LOADER]: 0,
  },
  reducers: {
    load: (state, action) => {
      console.log(action);
      state[action.payload] += 1;
    },
    unload: (state, action) => {
      state[action.payload] -= 1;
    },
  },
});

export const { load, unload } = loaderSlice.actions;

export default loaderSlice.reducer;
