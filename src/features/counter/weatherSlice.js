import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: 0,
  },
  reducers: {

  },
});

export const {  } = weatherSlice.actions;


export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};


export const selectCount = state => state.counter.value;

export default weatherSlice.reducer;
