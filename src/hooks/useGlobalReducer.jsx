// useGlobalReducer.jsx
import { useReducer, useEffect } from 'react';

const initialState = { contacts: [], loading: false, error: null };

function reducer(state, action) {
  switch(action.type) {
    case 'FETCH_START':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, contacts: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    // otras acciones: ADD, UPDATE, DELETE
    default:
      return state;
  }
}

export function useGlobalReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchContacts(user) {
    dispatch({ type: 'FETCH_START' });
    try {
      const res = await fetch(`https://playground.4geeks.com/todo/users/${user}`);
      const data = await res.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data.todo || [] });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }

  // funciones para add, update, delete...

  return { state, dispatch, fetchContacts };
}
