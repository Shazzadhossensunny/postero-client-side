import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.POSTERO_APIKEY)
const firebaseConfig = {
  // apiKey: import.meta.env.POSTERO_APIKEY,
  // authDomain: import.meta.env.POSTERO_AUTHDOMAIN,
  // projectId: import.meta.env.POSTERO_PROJECTID,
  // storageBucket: import.meta.env.POSTERO_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.POSTERO_MESSAGINGSENDERID,
  // appId: import.meta.env.POSTERO_APPID,
  apiKey: "AIzaSyD64k7EVl8zaTsVral57NZoqQqf-VR0XS4",
  authDomain: "postero-a38f0.firebaseapp.com",
  projectId: "postero-a38f0",
  storageBucket: "postero-a38f0.appspot.com",
  messagingSenderId: "731831202194",
  appId: "1:731831202194:web:0cac19d75df7add4be114b"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;