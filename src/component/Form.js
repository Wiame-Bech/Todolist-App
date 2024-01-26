import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), title: input, completed: false }]);
      setInput("");
    }
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addTodo();
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
        Add
      </button>
    </form>
  );
};

export default Form;
