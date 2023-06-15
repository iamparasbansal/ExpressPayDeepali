import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsjJJ-dUFTjdohnf2Pdy1Hxh-FN0QNeS0",
  authDomain: "expresspay-login.firebaseapp.com",
  projectId: "expresspay-login",
  storageBucket: "expresspay-login.appspot.com",
  messagingSenderId: "966335797869",
  appId: "1:966335797869:web:9d8e1811f5c7aeeccd3d64",
  measurementId: "G-3LVDDPWT6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}