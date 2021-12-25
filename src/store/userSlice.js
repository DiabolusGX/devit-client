import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            const user = action.payload;
            state.user = user;
            if (!user || user === null) {
                state.isAuth = false;
            } else {
                state.isAuth = true;
            }
        },
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
        joinRoom: (state, action) => {
            state.user.joinedRooms = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});
export const {
    setAuth,
    setBasicUserData,
    editAboutInfo,
    addExperienceInfo,
    editHeaderInfo,
    removeExperienceInfo,
    joinRoom,
    clearUser,
} = userSlice.actions;

export default userSlice.reducer;
