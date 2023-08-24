import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'Loading...',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      changeResults: (state, action) => {
        state.value = action.payload;
        state.status = "";
      },
      chargeResults: (state) => {
        state.value = 0;
        state.status = "Loading...";
      },
      zeroResults: (state) => {
        state.value = 0;
        state.status = "File with errors or null elements";
      }
    }
});

export const { changeResults, chargeResults, zeroResults } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const selectMessage = (state) => state.counter.status;

export default counterSlice.reducer;