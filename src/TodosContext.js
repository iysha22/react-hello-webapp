import React, { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const API_URL = "https://playground.4geeks.com/todo/todos/Aaliyah";

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Leer todos
  const getTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    } finally {
      setLoading(false);
    }
  };

  // Crear tarea
  const addTodo = async (todo) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (res.ok) {
        await getTodos();
      } else {
        throw new Error("Error creando tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Actualizar tarea
  const updateTodo = async (id, todo) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (res.ok) {
        await getTodos();
      } else {
        throw new Error("Error actualizando tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Eliminar tarea
  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (res.ok) {
        setTodos((prev) => prev.filter((t) => t.id !== id));
      } else {
        throw new Error("Error eliminando tarea");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{ todos, loading, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
