// lib/firebase.js

// Importa los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de tu proyecto (reemplaza con tus propios datos si no están ya actualizados)
const firebaseConfig = {
  apiKey: "AIzaSyC7X9YdPZrFsZY_s1mQiNOEGil4QiKSaNI",
  authDomain: "equilibrio-blog-editor.firebaseapp.com",
  projectId: "equilibrio-blog-editor",
  storageBucket: "equilibrio-blog-editor.appspot.com",
  messagingSenderId: "1057806094239",
  appId: "1:1057806094239:web:b82980d640a2dfc831b7aa",
  measurementId: "G-78SMSZQP8L"
};

// Inicializa la app
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);
