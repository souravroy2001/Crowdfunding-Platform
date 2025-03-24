// src/features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

// Function to hash password before saving
async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// Get stored admin from localStorage
const storedAdmin = JSON.parse(localStorage.getItem("admin")) || null;

// REGISTER ADMIN & REDIRECT
export const registerAdmin = createAsyncThunk(
    "admin/register",
    async ({ admin, navigate }, { rejectWithValue }) => {
        try {
            if (!admin.emailOrUsername) {
                toast.error("Email is required!");
                return rejectWithValue("Email is undefined");
            }

            const adminQuery = query(
                collection(firestore, "admins"),
                where("email", "==", admin.emailOrUsername)
            );
            const querySnapshot = await getDocs(adminQuery);

            if (!querySnapshot.empty) {
                toast.error("Admin already registered! Please log in.");
                return rejectWithValue("Admin already exists");
            }

            const hashedPassword = await hashPassword(admin.password);

            const newAdmin = {
                adminId: admin.adminId,
                email: admin.emailOrUsername,
                password: hashedPassword,
                verificationCode: admin.verificationCode,
                role: "admin",
                createdAt: new Date().toISOString(),
            };

            await addDoc(collection(firestore, "admins"), newAdmin);

            toast.success("Admin registered successfully!");

            localStorage.setItem("admin", JSON.stringify(newAdmin.adminId));
            navigate("/admin");

            return newAdmin;
        } catch (error) {
            toast.error("Error registering admin! Please try again.");
            return rejectWithValue(error.message);
        }
    }
);



// LOGIN ADMIN
export const loginAdmin = createAsyncThunk(
    "admin/login",
    async ({ adminId, password, navigate }, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "admins"));
            const admins = querySnapshot.docs.map((doc) => doc.data());

            const existingAdmin = admins.find((admin) => admin.adminId === adminId);

            if (!existingAdmin) {
                toast.error("Admin ID not found! Please check.");
                return rejectWithValue("Admin ID not found");
            }

            const passwordMatch = await bcrypt.compare(password, existingAdmin.password);

            if (!passwordMatch) {
                toast.error("Incorrect password!");
                return rejectWithValue("Incorrect password");
            }

            localStorage.setItem("admin", JSON.stringify({ email: existingAdmin.email, role: existingAdmin.role }));

            toast.success("Admin login successful!");

            navigate("/admin");

            return existingAdmin;
        } catch (error) {
            toast.error("Something went wrong!");
            return rejectWithValue(error.message);
        }
    }
);

// ADMIN SLICE
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: storedAdmin,
        loading: false,
        error: null,
    },
    reducers: {
        logoutAdmin: (state) => {
            state.admin = null;
            localStorage.removeItem("admin");
            toast.success("Admin logged out");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(registerAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
                localStorage.setItem("admin", JSON.stringify({ adminId: action.payload.adminId, role: action.payload.role }));
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginAdmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload;
                localStorage.setItem("admin", JSON.stringify({ adminId: action.payload.adminId, role: action.payload.role }));
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
