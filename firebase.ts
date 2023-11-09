import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAi-gSYS7_O0yjpUdDxmx3bZODkw2ZWv7M",
  authDomain: "chatnsk-640d5.firebaseapp.com",
  projectId: "chatnsk-640d5",
  storageBucket: "chatnsk-640d5.appspot.com",
  messagingSenderId: "683240752571",
  appId: "1:683240752571:web:227c581f9f64cd99c8709e",
  measurementId: "G-DQH39G230S"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db=getFirestore(app);

export {db}