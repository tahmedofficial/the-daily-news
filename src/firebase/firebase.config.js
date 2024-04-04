import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMJHCImWMdJzInOfv68Tjzee5unhUdyeo",
    authDomain: "the-daily-news-cf171.firebaseapp.com",
    projectId: "the-daily-news-cf171",
    storageBucket: "the-daily-news-cf171.appspot.com",
    messagingSenderId: "537747755690",
    appId: "1:537747755690:web:305264b55bcdd46b88b6d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;