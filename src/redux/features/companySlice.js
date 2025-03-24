import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";

// Function to hash password before saving
async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// Retrieve storedCompany from localStorage
const storedCompany = JSON.parse(localStorage.getItem("company"));

// REGISTER COMPANY
export const registerCompany = createAsyncThunk("company/register", async ({ company, navigate }, { rejectWithValue }) => {
    try {
        if (!company.companyEmail || !company.companyCode || !company.password) {
            toast.error("All fields are required!");
            return rejectWithValue("Missing required fields");
        }

        // Check if company already exists
        const companyQuery = query(collection(firestore, "companies"), where("companyCode", "==", company.companyCode));
        const querySnapshot = await getDocs(companyQuery);

        if (!querySnapshot.empty) {
            toast.error("Company already registered! Please log in.");
            return rejectWithValue("Company already exists");
        }

        // Hash password before storing
        const hashedPassword = await hashPassword(company.password);

        // Save Company data in Firestore
        await addDoc(collection(firestore, "companies"), {
            adminContactName: company.adminContactName || "",
            adminPosition: company.adminPosition || "",
            businessRegistrationNumber: company.businessRegistrationNumber || "",
            companyCode: company.companyCode,
            companyEmail: company.companyEmail,
            companyName: company.companyName,
            password: hashedPassword,
            role: company.role,
            createdAt: new Date().toISOString(),
        });

        toast.success(`Company registered successfully! Your Company Code: ${company.companyCode}`);

        localStorage.setItem("company", JSON.stringify({ companyCode: company.companyCode, companyEmail: company.companyEmail, role: company.role }));

        const companyData = { companyCode: company.companyCode, companyEmail: company.companyEmail, role: company.role };
        navigate("/company");

        return companyData;
    } catch (error) {
        toast.error("Error registering company! Please try again.");
        return rejectWithValue(error.message);
    }
});

// LOGIN COMPANY
export const loginCompany = createAsyncThunk("company/login", async ({ companyCode, password, navigate }, { rejectWithValue }) => {
    try {
        if (!companyCode || !password) {
            toast.error("Company Code and Password are required!");
            return rejectWithValue("Missing credentials");
        }

        // Query Firestore for company
        const companyQuery = query(collection(firestore, "companies"), where("companyCode", "==", companyCode));
        const querySnapshot = await getDocs(companyQuery);

        if (querySnapshot.empty) {
            toast.error("Company not found! Please register.");
            return rejectWithValue("Company does not exist");
        }

        const companyDoc = querySnapshot.docs[0];
        if (!companyDoc) {
            return rejectWithValue("Company data is missing.");
        }

        const companyData = companyDoc.data();

        // Compare hashed password using bcrypt
        const passwordMatch = await bcrypt.compare(password, companyData.password);

        if (!passwordMatch) {
            toast.error("Incorrect password! Try again.");
            return rejectWithValue("Invalid password");
        }

        toast.success(`Welcome back, ${companyData.companyName}!`);

        localStorage.setItem("company", JSON.stringify({ companyCode: companyData.companyCode, companyEmail: companyData.companyEmail, role: companyData.role }));

        const companyLogData = { companyCode: companyData.companyCode, companyEmail: companyData.companyEmail, role: companyData.role };
        navigate("/company");
        return companyLogData;
    } catch (error) {
        toast.error("Error logging in! Please try again.");
        return rejectWithValue(error.message);
    }
});

// Company Slice
const initialState = {
    company: storedCompany || null,
    loading: false,
    error: null,
};

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        logoutCompany: (state) => {
            state.company = null;
            localStorage.removeItem("company");
            toast.success("Logged out successfully!");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.company = action.payload;
                localStorage.setItem("company", JSON.stringify({ companyCode: action.payload.companyCode, companyEmail: action.payload.companyEmail, role: action.payload.role }));
            })
            .addCase(registerCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.company = action.payload;
                localStorage.setItem("company", JSON.stringify({ companyCode: action.payload.companyCode, companyEmail: action.payload.companyEmail, role: action.payload.role }));
            })
            .addCase(loginCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const { logoutCompany } = companySlice.actions;
export default companySlice.reducer;
