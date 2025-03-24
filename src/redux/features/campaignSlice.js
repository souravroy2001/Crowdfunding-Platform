import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, get, remove } from "firebase/database";
import { database } from "../../firebase/firebase";
import { toast } from 'react-toastify';  // Importing toast for notifications

const author = localStorage.getItem("company");

//Add Campaign to Realtime Database
// Add Campaign to Realtime Database
export const addCampaign = createAsyncThunk("campaigns/addCampaign", async (campaignData, { rejectWithValue }) => {
    try {
        const author = JSON.parse(localStorage.getItem("company")) || {};

        // Default values to prevent undefined in properties
        const campaignDataWithDefaults = {
            ...campaignData,
            author: author.companyEmail || "Anonymous",
            authorImage: campaignData.authorImage || "https://example.com/default-author-image.jpg",
            media: campaignData.media || [],
        };


        if (!campaignDataWithDefaults) {
            throw new Error("Campaign data is undefined");
        }

        const campaignId = Date.now().toString();
        const campaignRef = ref(database, "campaigns/" + campaignId);

        await set(campaignRef, campaignDataWithDefaults);

        toast.success("Campaign added successfully!");

        return { id: campaignId, ...campaignDataWithDefaults };
    } catch (error) {
        toast.error("Failed to add campaign: " + error.message);

        return rejectWithValue(error.message);
    }
});


// Fetch all campaigns from the Realtime Database
export const fetchCampaigns = createAsyncThunk("campaigns/fetchCampaigns", async (_, { rejectWithValue }) => {
    try {
        const campaignsRef = ref(database, "campaigns");

        const snapshot = await get(campaignsRef);

        if (snapshot.exists()) {
            const campaigns = Object.keys(snapshot.val()).map(key => ({
                id: key,
                ...snapshot.val()[key],
            }));
            return campaigns;
        } else {
            return [];
        }
    } catch (error) {
        toast.error("Failed to fetch campaigns: " + error.message);
        return rejectWithValue(error.message);
    }
});

// Delete a campaign
export const deleteCampaign = createAsyncThunk("campaigns/deleteCampaign", async (campaignId, { rejectWithValue }) => {
    try {
        const campaignRef = ref(database, "campaigns/" + campaignId);
        await remove(campaignRef);

        // Toast notification for success
        toast.success("Campaign deleted successfully!");

        return campaignId;
    } catch (error) {
        // Toast notification for error
        toast.error("Failed to delete campaign: " + error.message);
        return rejectWithValue(error.message);
    }
});

const campaignSlice = createSlice({
    name: "campaigns",
    initialState: {
        campaigns: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add campaign
            .addCase(addCampaign.pending, (state) => {
                state.loading = true;
            })
            .addCase(addCampaign.fulfilled, (state, action) => {
                state.loading = false;
                state.campaigns.push(action.payload);
            })
            .addCase(addCampaign.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Fetch campaigns
            .addCase(fetchCampaigns.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCampaigns.fulfilled, (state, action) => {
                state.loading = false;
                state.campaigns = action.payload;
            })
            .addCase(fetchCampaigns.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete campaign
            .addCase(deleteCampaign.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteCampaign.fulfilled, (state, action) => {
                state.loading = false;
                state.campaigns = state.campaigns.filter(campaign => campaign.id !== action.payload);
            })
            .addCase(deleteCampaign.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default campaignSlice.reducer;
