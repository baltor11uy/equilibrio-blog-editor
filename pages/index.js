import { useState } from 'react';
import dynamic from 'next/dynamic';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const QuillNoSSRWrapper = dynamic(import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const guardarArticulo = async () => {
    try {
      await addDoc(collection(db, 'articulos'), {
        titulo,
        contenido,
        timestamp: serverTimestamp()
      });
      alert('Artículo guardado con éxito');
      setTitulo('');
      setContenido('');
    } catch (e) {
      alert('Error al guardar: ' + e.message);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
      <h1>Crear nuevo artículo</h1>
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título del artículo"
        style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }}
      />
      <QuillNoSSRWrapper value={contenido} onChange={setContenido} />
      <button onClick={guardarArticulo} style={{ marginTop: '1rem' }}>
        Guardar
      </button>
    </div>
  );
}