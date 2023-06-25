
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCKgu8A8mnWUWrz6r2_X9Zmopd9lIXp2C8",
  authDomain: "task-8c7a5.firebaseapp.com",
  projectId: "task-8c7a5",
  storageBucket: "task-8c7a5.appspot.com",
  messagingSenderId: "158653899417",
  appId: "1:158653899417:web:94c3ff3e1c360216318e08"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)