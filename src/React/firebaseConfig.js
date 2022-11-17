import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCUJzE9nQAhT8jRUYmwChHEIs6Ue3AXI48",
    authDomain: "react-smit.firebaseapp.com",
    projectId: "react-smit",
    storageBucket: "react-smit.appspot.com",
    messagingSenderId: "195480281132",
    appId: "1:195480281132:web:aeac2db5801a2fac123189"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);