import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import TodosList from './component/TodosList';
import Form from './component/Form';
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;
