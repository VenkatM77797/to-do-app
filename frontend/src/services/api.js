const API_URL = 'http://localhost:3000/todos';

export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTodo = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateTodo = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};