// src/components/AddContact.jsx
import React, { useState, useEffect } from "react";
import { useContacts } from "../context/ContactContext";

const AddContact = ({ onClose, initialData }) => {
  const [label, setLabel] = useState("");
  const { addContact, updateContact } = useContacts();

  useEffect(() => {
    if (initialData) {
      setLabel(initialData.label);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) {
      updateContact(initialData.id, { label });
    } else {
      addContact({ label });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter contact name"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <div className="buttons">
        <button type="submit">{initialData ? "Update" : "Add"}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default AddContact;
