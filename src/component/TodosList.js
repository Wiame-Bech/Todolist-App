import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Configuration de FontAwesome
library.add(faCheckCircle, faEdit, faTrash);

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(todos.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  };


  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
          type="text"
          value={todo.title}
          className="list"
          onChange={(event) => event.preventDefault()}/>
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo.id)}>
            <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo.id)}>
            <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo.id)}>
            <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
