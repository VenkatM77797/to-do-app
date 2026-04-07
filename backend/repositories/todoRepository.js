const pool = require('../db');

const getAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
  return result.rows;
};

const getTodoById = async (id) => {
  const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
  return result.rows[0];
};

const createTodo = async ({ title, description = '', completed = false }) => {
  const result = await pool.query(
    'INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *',
    [title, description, completed]
  );
  return result.rows[0];
};

const updateTodo = async (id, { title, description, completed }) => {
  const result = await pool.query(
    'UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
    [title, description, completed, id]
  );
  return result.rows[0];
};

const deleteTodo = async (id) => {
  await pool.query('DELETE FROM todos WHERE id = $1', [id]);
  return result.rowCount > 0; //says true/false
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};