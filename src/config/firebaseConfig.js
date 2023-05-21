// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE20U6d3mssYkaD3dKT3XkrNdz-qBuiD8",
    authDomain: "gptpagechat.firebaseapp.com",
    projectId: "gptpagechat",
    storageBucket: "gptpagechat.appspot.com",
    messagingSenderId: "802260686255",
    appId: "1:802260686255:web:08269741afbbbef9ae4b5a",
    measurementId: "G-V5ZHWT3KE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()
export { auth, googleProvider, facebookProvider }