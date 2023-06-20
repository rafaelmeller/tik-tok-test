import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCIlPZ00cweEtoFSHgypLRXdrJvlQwmH9w",
  authDomain: "tiktok---jornada-34631.firebaseapp.com",
  projectId: "tiktok---jornada-34631",
  storageBucket: "tiktok---jornada-34631.appspot.com",
  messagingSenderId: "859523001989",
  appId: "1:859523001989:web:57996ac50dc9ff657d03ec"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;