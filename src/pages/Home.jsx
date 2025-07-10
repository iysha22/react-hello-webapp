// src/pages/Home.jsx
import React, { useState } from "react";
import { useContacts } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import AddContact from "../components/AddContact";
import Modal from "../components/Modal";

const Home = () => {
  const { contacts, loading, deleteContact } = useContacts();
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    deleteContact(deleteId);
    setDeleteId(null);
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)} style={{ float: "right", marginBottom: "1rem" }}>
        Add new contact
      </button>

      {showForm && (
        <AddContact
          onClose={() => {
            setShowForm(false);
            setEditingContact(null);
          }}
          initialData={editingContact}
        />
      )}

      {loading ? (
        <p>Loading contacts...</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onEdit={() => handleEdit(contact)}
            onDelete={() => handleDelete(contact.id)}
          />
        ))
      )}

      {deleteId && (
        <Modal
          message="Are you sure you want to delete this contact?"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

export default Home;
