import React, { useContext, useState } from "react";
import { TodosContext } from "./TodosContext";
import { TodoCard } from "./TodoCard";

export const Todos = ({ onEdit }) => {
  const { todos, loading, deleteTodo } = useContext(TodosContext);
  const [confirmId, setConfirmId] = useState(null);

  if (loading)
    return (
      <div className="text-center my-5">
        <div className="spinner-border" role="status" />
        <p>Cargando tareas...</p>
      </div>
    );

  return (
    <div>
      <h1 className="mb-4">Tareas</h1>
      {todos.length === 0 && <p>No hay tareas aún.</p>}
      {todos.map((t) => (
        <TodoCard
          key={t.id}
          todo={t}
          onEdit={onEdit}
          onDelete={() => setConfirmId(t.id)}
        />
      ))}

      {/* Modal confirmación */}
      {confirmId && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setConfirmId(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>¿Seguro que quieres eliminar esta tarea?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(confirmId);
                    setConfirmId(null);
                  }}
                >
                  Sí, eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setConfirmId(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
