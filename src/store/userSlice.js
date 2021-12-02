import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    username: '',
    email: '',
    avatar: '',
    wall: '',
    friends: [],
    friendRequests: [],
    batch: '',
    rooms: [], //with his/her status in it
    bio: '',
    links: {
        linkedin: '',
        github: '',
    },
    phone: '',
    gender: '',
    experience: [], //array of objects contains role and company name
    posts: [],
    repos: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBasicUserData: (state, action) => {
            const user = action.payload;
            state.user = user;
        },
    },
});
export const { setBasicUserData } = userSlice.actions;

export default userSlice.reducer;
