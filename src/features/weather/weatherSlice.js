import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: 0,
    sity: []
  },
  reducers: {
    addSity: (state, action) => {
      console.log(action.payload)
        state.sity = [...state.sity, action.payload]
    }
  },
});

export const { addSity } = weatherSlice.actions;


export const addSityAsync = name => dispatch => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=86181034ba903cb3066f9d04d1a27943`)
  .then(res => res.json())
  .then(data => dispatch(addSity(data)))
};


export const sity = state => state.weather.sity;

export default weatherSlice.reducer;
