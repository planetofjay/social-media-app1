import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsrUhMke0pH5uh6RIu_SpkMLQnTigNgOs",
  authDomain: "social-media-81ccc.firebaseapp.com",
  projectId: "social-media-81ccc",
  storageBucket: "social-media-81ccc.appspot.com",
  messagingSenderId: "60605174919",
  appId: "1:60605174919:web:e918f069362025c27e1422"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);