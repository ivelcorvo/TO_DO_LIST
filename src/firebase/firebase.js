import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDRpuXBMaT4tjY4WagiRwBteaYwcCPWv0",
  authDomain: "to-do-list-35706.firebaseapp.com",
  databaseURL: "https://to-do-list-35706-default-rtdb.firebaseio.com",
  projectId: "to-do-list-35706",
  storageBucket: "to-do-list-35706.firebasestorage.app",
  messagingSenderId: "24332357632",
  appId: "1:24332357632:web:292357cb9051030e81c8e5",
  measurementId: "G-V7Z1BZ2WDS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);