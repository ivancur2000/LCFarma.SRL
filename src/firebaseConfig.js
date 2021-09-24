import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSD3VIvVA2I5h6gbYPuXTBjYFktqCRmhM",
  authDomain: "lcfarma-b0ab6.firebaseapp.com",
  projectId: "lcfarma-b0ab6",
  storageBucket: "lcfarma-b0ab6.appspot.com",
  messagingSenderId: "378301824359",
  appId: "1:378301824359:web:813ebed0d38409967283c2",
  measurementId: "G-JLN4M0XE7T",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };
