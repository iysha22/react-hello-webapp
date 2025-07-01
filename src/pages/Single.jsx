// Contacts.jsx (Single.jsx)
import React, { useEffect, useState } from 'react';
import { useGlobalReducer } from './useGlobalReducer';

export default function Contacts() {
  const { state, fetchContacts } = useGlobalReducer();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts('iysha-22');
  }, []);

  // Funciones para abrir modal, submit form, delete, etc.

  return (
    <div>
      <h1>Contacts</h1>
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={() => { setEditingContact(null); setModalOpen(true); }}>
        Add Contact
      </button>
      <div>
        {state.contacts.map(contact => (
          <div key={contact.id}>
            <h3>{contact.name}</h3>
            {/* info y botones editar/borrar */}
          </div>
        ))}
      </div>
      {/* modal aquí */}
    </div>
  );
}
