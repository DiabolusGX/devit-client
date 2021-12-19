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
            const newExperience = action.payload;
            if (state.user.experiences) {
                state.user.experiences = [
                    newExperience,
                    ...state.user.experiences,
                ];
            } else {
                state.user.experiences = [newExperience];
            }
        },
        editNamePhotoInfo: (state, action) => {
            const { name, username, avatar, banner } = action.payload;
            state.user = { ...state.user, name, username, avatar, banner };
        },
    },
});
export const {
    setBasicUserData,
    editAboutInfo,
    addExperienceInfo,
    editNamePhotoInfo,
} = userSlice.actions;

export default userSlice.reducer;
