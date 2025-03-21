import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import projectsReducer from "./features/projectsSlice";
import donationsReducer from "./features/donationsSlice";
import notificationsReducer from "./features/notificationsSlice";
import favoritesReducer from "./features/favoritesSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    donations: donationsReducer,
    notifications: notificationsReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
