import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [
    {
      id: 1,
      type: "donation",
      category: "Donations Received",
      title: "New Donation Received",
      message: "Sarah donated $50 to your campaign",
      time: Date.now() - 1000 * 60 * 10, // 10 minutes ago
      actionLabel: "View Details",
      isRead: false
    },
    {
      id: 2,
      type: "milestone",
      category: "Campaign Updates",
      title: "Campaign Milestone Reached",
      message: "Your campaign has reached 75% of its funding goal!",
      time: Date.now() - 1000 * 60 * 60 * 2, // 2 hours ago
      actionLabel: "View Campaign",
      isRead: false
    },
    {
      id: 3,
      type: "comment",
      category: "New Comments",
      title: "New Comment on Campaign",
      message: "John left a comment on your campaign: 'Great initiative!'",
      time: Date.now() - 1000 * 60 * 60 * 24, // 1 day ago
      actionLabel: "Reply",
      isRead: true
    }
  ],
  filters: {
    categories: ["Campaign Updates", "Donations Received", "New Comments"],
    dateRange: "Last 7 days",
    status: "All"
  }
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.isRead = true;
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(notification => {
        notification.isRead = true;
      });
    },
    updateFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addNotification: (state, action) => {
      state.notifications.unshift({
        id: Date.now(),
        time: Date.now(),
        isRead: false,
        ...action.payload
      });
    }
  }
});

export const { markAsRead, markAllAsRead, updateFilters, addNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;
