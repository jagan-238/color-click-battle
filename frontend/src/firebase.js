import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWoalk1LmrdNdngG_jCA2wzDu0_rxR6Oc",
  authDomain: "web-b43.firebaseapp.com",
  databaseURL: "https://web-b43-default-rtdb.firebaseio.com",
  projectId: "web-b43",
  storageBucket: "web-b43.firebasestorage.app",
  messagingSenderId: "1043699448922",
  appId: "1:1043699448922:web:75aca8f58416f651e4ec63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth module for use in login/signup
export const auth = getAuth(app);
