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
        editAboutInfo: (state, action) => {
            const { bio, phone, links, roomAddress, gender } = action.payload;
            state.user = {
                ...state.user,
                bio,
                phone,
                links,
                roomAddress,
                gender,
            };
        },
        addExperienceInfo: (state, action) => {
            state.user.experiences = action.payload;
        },
        removeExperienceInfo: (state, action) => {
            state.user.experiences = action.payload;
        },
        editHeaderInfo: (state, action) => {
            const { displayName, username, avatar, banner } = action.payload;
            state.user = {
                ...state.user,
                displayName,
                username,
                avatar,
                banner,
            };
        },
    },
});
export const {
    setBasicUserData,
    editAboutInfo,
    addExperienceInfo,
    editHeaderInfo,
    removeExperienceInfo,
} = userSlice.actions;

export default userSlice.reducer;
