import React, { useState, useEffect } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './services/api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => setTodos(await fetchTodos());

  useEffect(() => { loadTodos(); }, []);

  const handleAdd = async (todo) => { 
    await createTodo(todo);
    loadTodos();
  };

  const handleUpdate = async (id, updated) => {
    await updateTodo(id, updated);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;