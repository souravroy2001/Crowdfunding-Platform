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
  try {
    return await registerOrLoginWithProvider(
      new FacebookAuthProvider(),
      "facebook"
    );
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      // The email is already registered with another provider
      const email = error.customData?.email;

      // Get the available sign-in methods for this email
      const providers = await fetchSignInMethodsForEmail(email);

      // For example: if email is registered with Google, show a message
      const providerName =
        providers[0] === "google.com" ? "Google" : "email/password";

      throw new Error(`This email is already registered with ${providerName}.
                      Please sign in with that method first, then you can link Facebook.`);
    }

    // Re-throw other errors
    throw error;
  }
}

async function logout() {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    window.location.href = "/";
  } catch (error) {
    toast.error(`Logout failed: ${error.message}`);
    throw error;
  }
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

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: user.email,
        role: "user",
        provider: providerName,
      })
    );

    window.location.href = "/user-dashboard";
    return user;
  } catch (error) {
    toast.error(`Error with ${providerName} authentication:`, error.message);
    throw error;
  }
}

export { registerOrLoginWithGoogle, registerOrLoginWithFacebook, logout };
