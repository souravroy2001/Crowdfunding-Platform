import { auth, firestore } from "./firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// ✅ Function to save user data in Firestore after registration
async function postUser(userObj) {
  try {
    await setDoc(doc(firestore, "users", userObj.uid), userObj, {
      merge: true,
    });
    toast.success(`User registered successfully: ${userObj.fullName}`);
  } catch (error) {
    toast.error(`Error posting user data: ${error.message}`);
  }
}

// ✅ Check if user is already registered
async function checkUserExists(uid) {
  const userRef = doc(firestore, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists();
}

// 🔥 Google Register/Login
async function registerOrLoginWithGoogle() {
  return registerOrLoginWithProvider(new GoogleAuthProvider(), "google");
}

// 🔥 Facebook Register/Login
async function registerOrLoginWithFacebook() {
  return registerOrLoginWithProvider(new FacebookAuthProvider(), "facebook");
}

// ✅ Handles both register & login
async function registerOrLoginWithProvider(provider, providerName) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userExists = await checkUserExists(user.uid);

    if (!userExists) {
      // Register the user
      const userObj = {
        uid: user.uid,
        fullName: user.displayName || `${providerName} User`,
        email: user.email,
        username: user.email.split("@")[0],
        password: "",
        confirmPassword: "",
        rememberMe: false,
        role: "user",
        provider: providerName,
        createdAt: new Date().toISOString(),
      };
      await postUser(userObj);
      toast.success("User registered successfully!");
    } else {
      toast.warning("User exists, logging in...");
    }

    window.location.href = "/user-dashboard";
    return user;
  } catch (error) {
    toast.error(`Error with ${providerName} authentication:`, error.message);
    throw error;
  }
}

export { registerOrLoginWithGoogle, registerOrLoginWithFacebook };
