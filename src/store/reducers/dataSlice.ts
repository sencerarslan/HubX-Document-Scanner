import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'tabControl',
    initialState: '1',
    reducers: {
        tabState: (state, { payload }) => (state = payload as string),
    },
});

export const { tabState } = counterSlice.actions;
export default counterSlice.reducer;
