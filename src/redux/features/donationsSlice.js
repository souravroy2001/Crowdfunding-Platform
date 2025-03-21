import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donations: [],
  loading: false,
  error: null,
};

const donationsSlice = createSlice({
  name: "donations",
  initialState,
  reducers: {
    addDonation: (state, action) => {
      state.donations.push(action.payload);
    },
    updateProjectFunding: (state, action) => {
      const { projectId, amount } = action.payload;
      // Update project funding in projects slice
      // This will be handled by the projects slice
    },
  },
});

export const { addDonation, updateProjectFunding } = donationsSlice.actions;
export default donationsSlice.reducer;
