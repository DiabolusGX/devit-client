import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    avatar: '',
    links: {
        github: '',
        linkedin: '',
    },
    phone: '',
    bio: '',
    gender: '',
};

export const activateSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setLinks: (state, action) => {
            state.links.github = action.payload.github;
            state.links.linkedin = action.payload.linkedin;
        },
        setPersonalInfo: (state, action) => {
            const { phone, bio, gender } = action.payload;
            state.phone = phone;
            state.bio = bio;
            state.gender = gender;
        },
    },
});

export const { setUsername, setAvatar, setLinks, setPersonalInfo } =
    activateSlice.actions;

export default activateSlice.reducer;
