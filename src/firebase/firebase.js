// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs, addDoc, Timestamp, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBgE8o9wDZ6Di1RwbIHAW-TFcwP4K2bVY",
  authDomain: "fundhive-20b10.firebaseapp.com",
  projectId: "fundhive-20b10",
  storageBucket: "fundhive-20b10.firebasestorage.app",
  messagingSenderId: "884348661899",
  appId: "1:884348661899:web:68ecfc079a122d6a87a48e",
  databaseURL: "https://fundhive-20b10-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getDatabase(app);
const firestore = getFirestore(app); // Renamed `db` to `firestore`

// Firestore References
const usersCollection = collection(firestore, "users");
const eventsCollectionRef = collection(firestore, "events");

// Providers for social login
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Function to get all events from Firestore
export const getEvents = async (setEvents) => {
  try {
    const querySnapshot = await getDocs(eventsCollectionRef);
    const events = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const start = new Date(data.start.seconds * 1000);  // Convert Firestore timestamp to Date
      const end = new Date(data.end.seconds * 1000);
      return {
        id: doc.id,
        title: data.task || "Untitled Task",
        description: data.description || "No description",
        priority: data.priority || "Medium",
        creator: data.creator || "Unknown",
        start,
        end,
      };
    });
    setEvents(events);
  } catch (error) {
    console.error("Error fetching events: ", error);
  }
};

// Function to add a new event to Firestore
export const addEvent = async (newEvent) => {
  try {
    if (!newEvent.start || !newEvent.end) {
      console.error("Error: Event start and end times are required.");
      return;
    }

    const docRef = await addDoc(eventsCollectionRef, {
      task: newEvent.task || "Untitled Task",
      description: newEvent.description || "No description",
      priority: newEvent.priority || "Medium",
      creator: newEvent.creator || "Unknown",
      start: Timestamp.fromDate(new Date(newEvent.start)),
      end: Timestamp.fromDate(new Date(newEvent.end)),
    });
    console.log("Event added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding event: ", error);
  }
};

// Export Firebase-related modules
export { app, auth, firestore, googleProvider, facebookProvider, usersCollection, addDoc, getDocs };
