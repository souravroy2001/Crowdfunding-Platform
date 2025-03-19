import { auth, firestore } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updatePassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

async function registerUser(name, email, password, role = "user") {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    const userObj = {
      uid: user.uid,
      name: name,
      email: user.email,
      createdAt: new Date().toISOString(),
      photoURL: "",
      bio: "",
      following: [],
      follow: [],
      provider: "email&Password",
      role: role,
    };

    await postUser(userObj);
    alert("Registration successful!");
    return user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    handleAuthError(error);
    throw error;
  }
}

async function postUser(userObj) {
  try {
    await setDoc(doc(firestore, "users", userObj.uid), userObj);
    console.log("User data posted successfully");
  } catch (error) {
    console.error("Error posting user data:", error.message);
  }
}

async function registerWithGoogleUser() {
  const provider = new GoogleAuthProvider();
  return signInWithProvider(provider, "google");
}

async function registerWithFacebookUser() {
  const provider = new FacebookAuthProvider();
  return signInWithProvider(provider, "facebook");
}

async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userDoc = await getDoc(doc(firestore, "users", user.uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      if (userData.role === "admin") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/dashboard";
      }
    }

    alert("Login successful!");
    return user;
  } catch (error) {
    console.error("Error logging in:", error.message);
    handleAuthError(error);
    throw error;
  }
}

async function signInWithProvider(provider, providerName) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(firestore, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const userObj = {
        uid: user.uid,
        name: user.displayName || `${providerName} User`,
        email: user.email,
        photoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
        provider: providerName,
        bio: "",
        following: [],
        follow: [],
        role: "user",
      };
      await postUser(userObj);
    }

    window.location.href = "/dashboard";
    return user;
  } catch (error) {
    console.error(`Error with ${providerName} sign-in:`, error.message);
    throw error;
  }
}

async function doSignout() {
  return signOut(auth)
    .then(() => {
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
}

async function doPasswordReset(email) {
  return sendPasswordResetEmail(auth, email).catch((error) => {
    console.error("Error sending password reset email:", error.message);
    throw error;
  });
}

async function doPasswordChange(password) {
  if (!auth.currentUser) {
    throw new Error("No user is currently logged in.");
  }
  return updatePassword(auth.currentUser, password).catch((error) => {
    console.error("Error updating password:", error.message);
    throw error;
  });
}

async function doSendEmailVerification() {
  if (!auth.currentUser) {
    throw new Error("No user is currently logged in.");
  }
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  }).catch((error) => {
    console.error("Error sending email verification:", error.message);
    throw error;
  });
}

function handleAuthError(error) {
  if (error.code === "auth/email-already-in-use") {
    alert("User is already registered. Please log in.");
  } else if (error.code === "auth/weak-password") {
    alert("Password is too weak. Please use a stronger password.");
  } else if (error.code === "auth/invalid-email") {
    alert("Invalid email format. Please enter a valid email.");
  } else {
    alert(`Operation failed: ${error.message}`);
  }
}

export {
  registerUser,
  loginUser,
  registerWithGoogleUser,
  registerWithFacebookUser,
  loginWithGoogleUser,
  loginWithFacebookUser,
  doSignout,
  doPasswordReset,
  doPasswordChange,
  doSendEmailVerification,
};
