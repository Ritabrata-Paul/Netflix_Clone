import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjYJpas4p_Mt6fFn-7oI8oFjuK2jv1t8E",
  authDomain: "react-netflix-clone-da1f4.firebaseapp.com",
  projectId: "react-netflix-clone-da1f4",
  storageBucket: "react-netflix-clone-da1f4.appspot.com",
  messagingSenderId: "666054994560",
  appId: "1:666054994560:web:b8e7880d5d3f80df96d465",
  measurementId: "G-WQVVXX5PQJ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
