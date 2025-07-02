import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Bienvenido a la app</h1>
        <p>Este es el contenido principal.</p>
      </main>
      <Footer />
    </>
  );
}
