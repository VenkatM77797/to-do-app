const todoRepository = require('../repositories/todoRepository');

async function getAllTodos() {
  return todoRepository.getAllTodos();
}

async function getTodoById(id) {
  return todoRepository.getTodoById(id);
}

async function createTodo(data) {
  if (!data.title) {
    throw new Error('Title is required');
  }
  return todoRepository.createTodo(data);  
}

async function updateTodo(id, data) {
  return todoRepository.updateTodo(id, data); 
}

async function deleteTodo(id) {
  return todoRepository.deleteTodo(id);
}

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};