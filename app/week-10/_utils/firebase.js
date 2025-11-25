
"use client";

import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuaeUs83Vb8E2hTc1zqZ0FvaqcOvyl4oI",
  authDomain: "cprg306-assignments-aa202.firebaseapp.com",
  projectId: "cprg306-assignments-aa202",
  storageBucket: "cprg306-assignments-aa202.firebasestorage.app",
  messagingSenderId: "693831111001",
  appId: "1:693831111001:web:92c07a75d4f2c058f9bc48"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);