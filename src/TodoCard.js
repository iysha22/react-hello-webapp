import React from "react";

export const TodoCard = ({ todo, onEdit, onDelete }) => {
  return (
    <div
      className={`card mb-3 ${
        todo.done ? "bg-success bg-opacity-10" : "bg-danger bg-opacity-10"
      }`}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{todo.label}</h5>
          <p className="card-text">
            Estado: <strong>{todo.done ? "Completada" : "Pendiente"}</strong>
          </p>
        </div>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => onEdit(todo)}
          >
            Editar
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(todo.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
