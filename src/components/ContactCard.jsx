// src/components/ContactCard.jsx
import React from "react";

const ContactCard = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div>
        <h3>{contact.label}</h3>
        <p><strong>ID:</strong> {contact.id}</p>
      </div>
      <div className="buttons">
        <button onClick={onEdit}>✏️</button>
        <button onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
};

export default ContactCard;
