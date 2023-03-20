import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQOn3TFtFWu22eWSWcvec9ijfNnipIktw",
  authDomain: "binimovie-2cbc6.firebaseapp.com",
  projectId: "binimovie-2cbc6",
  storageBucket: "binimovie-2cbc6.appspot.com",
  messagingSenderId: "189042742375",
  appId: "1:189042742375:web:e95eeb4d458ddea78070c2",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
