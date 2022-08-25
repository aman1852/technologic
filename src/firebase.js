import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBaSnoOrFCQFDd4cm9bNJNtqoZ89zGz_dA",
  authDomain: "technologic-aman.firebaseapp.com",
  projectId: "technologic-aman",
  storageBucket: "technologic-aman.appspot.com",
  messagingSenderId: "1078324525162",
  appId: "1:1078324525162:web:872b114e6523e698573213",
  measurementId: "G-SHXDHZH5F6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)