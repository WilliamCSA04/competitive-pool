import { createSlice } from '@reduxjs/toolkit';

export const championSlice = createSlice({
  name: 'champion',
  initialState: {
    champions: {},
    championsList: [],
  },
  reducers: {
    setChampions: (state, action) => {
      state.champions = action.payload;
      state.championsList = Object.values(action.payload);
    },
  },
});

export const { setChampions } = championSlice.actions;

export default championSlice.reducer;
