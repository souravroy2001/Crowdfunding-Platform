import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import projectsReducer from "./features/projectsSlice";
import donationsReducer from "./features/donationsSlice";
import notificationsReducer from "./features/notificationsSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    donations: donationsReducer,
    notifications: notificationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
