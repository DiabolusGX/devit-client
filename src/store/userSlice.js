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
    },
});
export const { setBasicUserData, editAboutInfo, addExperienceInfo } =
    userSlice.actions;

export default userSlice.reducer;
