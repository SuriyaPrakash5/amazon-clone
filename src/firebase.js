import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCzKzShR9So93ftXt30McH6WMXJBT1RGAU",
    authDomain: "clone-9b0f4.firebaseapp.com",
    projectId: "clone-9b0f4",
    storageBucket: "clone-9b0f4.appspot.com",
    messagingSenderId: "931246045691",
    appId: "1:931246045691:web:dffcbbe6d42c988456735e",
    measurementId: "G-Q440SV8G5J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
