import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpEhfyFmCvoPHartH1YMmu5Us3_BW1zKo",
  authDomain: "chat-b4573.firebaseapp.com",
  projectId: "chat-b4573",
  storageBucket: "chat-b4573.firebasestorage.app",
  messagingSenderId: "1039855747445",
  appId: "1:1039855747445:web:84d194028ee2f5dc69533c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);