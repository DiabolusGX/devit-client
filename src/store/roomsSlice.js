import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rooms: [],
};

export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    reducers: {
        getAllRooms: (state, action) => {
            state.rooms = action.payload;
        },
        addRoom: (state, action) => {
            state.rooms = [...state.rooms, action.payload];
        },
    },
});
export const { getAllRooms, addRoom } = roomsSlice.actions;

export default roomsSlice.reducer;
