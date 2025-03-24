import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import projectsReducer from "./features/projectsSlice";
import donationsReducer from "./features/donationsSlice";
import notificationsReducer from "./features/notificationsSlice";
import favoritesReducer from "./features/favoritesSlice";
import authReducer from "./features/authSlice";
import adminReducer from "./features/adminSlice";
import companyReducer from "./features/companySlice";
import campaignReducer from "./features/campaignSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
    donations: donationsReducer,
    notifications: notificationsReducer,
    favorites: favoritesReducer,
    auth: authReducer,
    admin: adminReducer,
    company: companyReducer,
    campaigns: campaignReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
