// src/components/Modal.jsx
import React from "react";

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-box">
        <p>{message}</p>
        <div className="buttons">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
