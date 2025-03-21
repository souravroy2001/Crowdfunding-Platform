import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("theme") === "false" ? false : true;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = !state;
      localStorage.setItem("theme", String(newTheme));
      return newTheme;
    }
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
