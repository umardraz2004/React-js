import { useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./models/TodoList";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos ] = useState<TodoList[]>([]);
  // const todos = [
  //   new TodoList("Task 1"),
  //   new TodoList("Task 2"),
  //   new TodoList("Task 3"),
  //   new TodoList("Task 4"),
  //   new TodoList("Task 5"),
  // ];

  const onAddTodoHandler = (todoText: string) => {
    const newTodo = new TodoList(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  }

  const todoRemovedHandler = (todoId: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todo items={todos} onRemoveTodo={todoRemovedHandler} />
    </div>
  );
}

export default App;
