// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCS1MEutdC8sWysXWH2_CTMoMhLfH6Zju0",
authDomain: "vueprog-38816.firebaseapp.com",
projectId: "vueprog-38816",
storageBucket: "vueprog-38816.appspot.com",
messagingSenderId: "784232157481",
appId: "1:784232157481:web:c44a433f5cfea4e2cde738",
measurementId: "G-03KGRXMYNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;