import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp-U6Vht0MxzCMnZ7wOs3EquchVmf2CBk",
  authDomain: "legal-connect-sih-2023.firebaseapp.com",
  projectId: "legal-connect-sih-2023",
  storageBucket: "legal-connect-sih-2023.appspot.com",
  messagingSenderId: "185616180354",
  appId: "1:185616180354:web:0aa3b62f6c337def82009b",
  measurementId: "G-YKLM6NJM50",
};

const app = initializeApp(firebaseConfig);

export default getStorage(app);
