import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCJE6IF0sDj1yXSEqOq9E1jt6MoA32L5j0",
  authDomain: "netflix-project-daa2d.firebaseapp.com",
  projectId: "netflix-project-daa2d",
  storageBucket: "netflix-project-daa2d.appspot.com",
  messagingSenderId: "94107670034",
  appId: "1:94107670034:web:9863caa6dd7842475e6acb",
  measurementId: "G-BG4D365CJC"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)