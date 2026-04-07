const todoController = require('../controllers/todoController');

const express = require('express'); //import
const router = express.Router(); //create router


router.get('/', todoController.getTodos);

router.get('/:id', todoController.getTodoById);

router.post('/', todoController.addTodo);

router.put('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router;