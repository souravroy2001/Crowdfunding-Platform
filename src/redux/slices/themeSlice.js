import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  colors: {
    light: {
      primary: '#00bfa5',
      primaryHover: '#009688',
      secondary: '#bb86fc',
      secondaryHover: '#9c64fb',
      background: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200',
    },
    dark: {
      primary: '#bb86fc',
      primaryHover: '#9c64fb',
      secondary: '#00bfa5',
      secondaryHover: '#009688',
      background: 'bg-gray-900',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      border: 'border-gray-700',
    },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
