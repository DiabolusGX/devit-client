import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBasicUserData: (state, action) => {
            state.user = action.payload;
        },
    },
});
export const { setBasicUserData } = userSlice.actions;

export default userSlice.reducer;
