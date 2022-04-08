import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

// // // TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCptlq2O63Pk-CTLD8BxuYTjS9ApC6vOfs",
    authDomain: "asmfull-6ff42.firebaseapp.com",
    databaseURL: "https://asmfull-6ff42-default-rtdb.firebaseio.com",
    projectId: "asmfull-6ff42",
    storageBucket: "asmfull-6ff42.appspot.com",
    messagingSenderId: "770964330211",
    appId: "1:770964330211:web:46a0473f58de1f2fa1d7d6",
    measurementId: "G-5ZTZSMH4WH"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const dbRef = ref(getDatabase());
export default database;