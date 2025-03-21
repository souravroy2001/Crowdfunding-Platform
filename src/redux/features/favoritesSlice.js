import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const projectId = action.payload;
            const index = state.favorites.findIndex((fav) => fav === projectId);

            if (index !== -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(projectId);
            }
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
