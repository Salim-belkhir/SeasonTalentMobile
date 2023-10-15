// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import Config from "react-native-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/**
 * Firebase configuration object containing the necessary credentials to connect to the Firebase project.
 * @typedef {Object} FirebaseConfig
 * @property {string} apiKey - The API key for the Firebase project.
 * @property {string} authDomain - The authentication domain for the Firebase project.
 * @property {string} projectId - The project ID for the Firebase project.
 * @property {string} storageBucket - The storage bucket for the Firebase project.
 * @property {string} messagingSenderId - The messaging sender ID for the Firebase project.
 * @property {string} appId - The app ID for the Firebase project.
 */

/**
 * Firebase configuration object containing the necessary credentials to connect to the Firebase project.
 * @type {FirebaseConfig}
 */
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
  appId: Config.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
// in Order to persist the user state, we need to use the React Native AsyncStorage
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const auth = getAuth(app);
