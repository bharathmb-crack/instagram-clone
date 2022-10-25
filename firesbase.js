import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7aqYnvsZ_pQhvNiO1BSHmJbByNnVC520",
  authDomain: "insta-clone-aa243.firebaseapp.com",
  projectId: "insta-clone-aa243",
  storageBucket: "insta-clone-aa243.appspot.com",
  messagingSenderId: "498508007741",
  appId: "1:498508007741:web:19910e79d9fa91beb09d54",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

export { db, app, storage };
