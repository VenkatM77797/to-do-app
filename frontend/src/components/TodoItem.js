import React from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {

  const handleEdit = () => {
    const newTitle = prompt("Edit title", todo.title);
    const newDescription = prompt("Edit description", todo.description);

    if (newTitle !== null && newDescription !== null) {
      onUpdate(todo.id, {
        ...todo,
        title: newTitle,
        description: newDescription
      });
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() =>
          onUpdate(todo.id, { completed: !todo.completed })
        }
      />
      {todo.title} {todo.description && `- ${todo.description}`}

      <button onClick={handleEdit}>Edit</button>

      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;