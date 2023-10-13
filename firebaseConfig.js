// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFSZMQSySIT_qL3uqLex1wgKPNK1H6bZY",
  authDomain: "seasontalent-401914.firebaseapp.com",
  projectId: "seasontalent-401914",
  storageBucket: "seasontalent-401914.appspot.com",
  messagingSenderId: "119884661682",
  appId: "1:119884661682:web:e32ada210609fff1331aab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// IOS_ClientID : 119884661682-bsjnv2nrfle9vu6ks3n5cp3d66b5ikvb.apps.googleusercontent.com
// Android : 119884661682-uk1elmgv2kt5tfk7jco9rc02ra2emooj.apps.googleusercontent.com
