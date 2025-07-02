import React, { useState, useContext, useEffect } from "react";
import { TodosContext } from "./TodosContext";

export const AddTodo = ({ todoToEdit, onFinish }) => {
  const { addTodo, updateTodo } = useContext(TodosContext);

  const [todo, setTodo] = useState({
    label: "",
    done: false,
  });

  useEffect(() => {
    if (todoToEdit) {
      setTodo(todoToEdit);
    }
  }, [todoToEdit]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todoToEdit) {
      await updateTodo(todo.id, todo);
    } else {
      await addTodo(todo);
    }
    onFinish();
  };

  return (
    <div>
      <h1 className="mb-4">{todoToEdit ? "Editar Tarea" : "Agregar Tarea"}</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <div className="mb-3">
          <label htmlFor="label" className="form-label">
            Tarea
          </label>
          <input
            id="label"
            name="label"
            type="text"
            className="form-control"
            value={todo.label}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            id="done"
            name="done"
            type="checkbox"
            className="form-check-input"
            checked={todo.done}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="done">
            Completada
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};
