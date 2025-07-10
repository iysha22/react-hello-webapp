import { createContext, useContext, useEffect, useState } from "react";

const API_BASE = "https://playground.4geeks.com/todo";
const USER = "iysha-22";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const fetchContacts = async () => {
    const res = await fetch(`${API_BASE}/users/${USER}`);
    const data = await res.json();
    const parsed = data.todos.map(todo => {
      const [name, phone, email, address] = todo.label.split(" - ");
      return { id: todo.id, name, phone, email, address };
    });
    setContacts(parsed);
  };

  const addOrUpdateContact = async (contact) => {
    const label = `${contact.name} - ${contact.phone} - ${contact.email} - ${contact.address}`;
    if (contact.id) {
      await fetch(`${API_BASE}/todos/${contact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label, done: false }),
      });
    } else {
      await fetch(`${API_BASE}/todos/${USER}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label, done: false }),
      });
    }
    await fetchContacts();
    setEditing(null);
  };

  const confirmDelete = async () => {
    if (deleteId) {
      await fetch(`${API_BASE}/todos/${deleteId}`, { method: "DELETE" });
      await fetchContacts();
    }
    setShowModal(false);
    setDeleteId(null);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        editing,
        setEditing,
        addOrUpdateContact,
        setShowModal,
        setDeleteId,
        showModal,
        confirmDelete
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
