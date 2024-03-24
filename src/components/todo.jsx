import React, { useState } from "react";

import Form from "./form";
import TodoList from "./todolist";
import Footer from "./fotter";

function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done === true).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}

export default Todo;
