import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC53qvcI3nMAcetexIVrBryQtJ4JVpE658",
  authDomain: "examenfinal-ee6a7.firebaseapp.com",
  projectId: "examenfinal-ee6a7",
  storageBucket: "examenfinal-ee6a7.appspot.com",
  messagingSenderId: "661647267795",
  appId: "1:661647267795:web:9a2550553f2cb982c48126",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
