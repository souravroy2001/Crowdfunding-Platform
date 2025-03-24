import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

// Function to hash password before saving
async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// Retrieve user from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));

// Async function to register user
export const registerUser = createAsyncThunk(
    "auth/register",
    async ({ user, navigate }, { rejectWithValue }) => {
        try {
            console.log("Registering user:", user);

            const querySnapshot = await getDocs(collection(firestore, "users"));
            const existingUser = querySnapshot.docs.find((doc) => doc.data().email === user.email);

            if (existingUser) {
                toast.error("User already registered! Please log in.");
                return rejectWithValue("User already exists");
            }

            const hashedPassword = await hashPassword(user.password);
            const hashedConfirmPassword = await hashPassword(user.confirmPassword);

            await addDoc(collection(firestore, "users"), {
                ...user,
                password: hashedPassword,
                confirmPassword: hashedConfirmPassword,
                createdAt: new Date().toISOString()
            });

            toast.success("Registration successful!");

            // Store user in localStorage
            localStorage.setItem("user", JSON.stringify({ email: user.email, role: user.role }));
            navigate("/user-dashboard");

            return { ...user, password: hashedPassword, confirmPassword: hashedConfirmPassword };

        } catch (error) {
            console.error("Registration Error:", error);
            toast.error("Error registering user!");
            return rejectWithValue(error.message);
        }
    }
);

// Async function to login user
export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password, provider, navigate }, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(firestore, "users"));
            const users = querySnapshot.docs.map((doc) => doc.data());

            const existingUser = users.find((user) => user.email === email);

            if (!existingUser) {
                toast.error("User not found! Please register.");
                return rejectWithValue("User not found");
            }


            if (provider === "email") {
                if (!password) {
                    toast.error("Password is required for email login.");
                    return rejectWithValue("Password is required");
                }

                const passwordMatch = await bcrypt.compare(password, existingUser.password);
                if (!passwordMatch) {
                    toast.error("Incorrect password!");
                    return rejectWithValue("Incorrect password");
                }
            }


            // Store user in localStorage
            localStorage.setItem("user", JSON.stringify({ email: existingUser.email, role: existingUser.role }));

            toast.success("Login successful!");

            // Redirect to user dashboard
            navigate("/user-dashboard");

            return existingUser;
        } catch (error) {
            toast.error("Something went wrong! Please try again.");
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: storedUser || null,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            toast.success("Logged out successfully!");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify({ email: action.payload.email, role: action.payload.role }));
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                localStorage.setItem("user", JSON.stringify({ email: action.payload.email, role: action.payload.role }));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
