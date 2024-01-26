import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './App.css';


const Form = () => {
  // State for input value
  const [input, setInput] = useState("");

  // State for the list of todos
  const [todos, setTodos] = useState([]);

  // State for editing a todo
  const [editTodo, setEditTodo] = useState(null);

  // Update the existing todo
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo(null);
  };

  // Effect to set input value based on editTodo
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);

  // Handle input change
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle form submission
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      // Add a new todo
      setTodos([
        ...todos,
        { id: uuidv4(), title: input, completed: false },
      ]);
      setInput("");
    } else {
      // Update an existing todo
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        onChange={onInputChange}
      />
      <button type="submit" className="button-add">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
