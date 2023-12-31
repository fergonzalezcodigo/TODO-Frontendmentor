import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

// const initialStateTodos = [
//   {
//     id: 1,
//     title: "Complete Online JavaScript",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Go to the gym",
//     completed: false,
//   },
//   {
//     id: 3,
//     title: "10 minutes meditation",
//     completed: false,
//   },
//   {
//     id: 4,
//     title: "Pick up groceries",
//     completed: true,
//   },
//   {
//     id: 5,
//     title: "Complete todo app on Frontend Mentor",
//     completed: false,
//   },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (idUpdate) => {
    setTodos(
      todos.map((todoMap) =>
        todoMap.id === idUpdate
          ? { ...todoMap, completed: !todoMap.completed }
          : todoMap
      )
    );
  };

  const removeTodo = (idRemove) => {
    setTodos(todos.filter((todoRemove) => todoRemove.id !== idRemove));
  };

  const computedItems = todos.filter(
    (todoComputed) => !todoComputed.completed
  ).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todoClear) => !todoClear.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todoActive) => !todoActive.completed);
      case "completed":
        return todos.filter((todoCompleted) => todoCompleted.completed);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat transition-all duration-1000 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
        <Header />
        <main className="container mx-auto mt-8 px-4 md:max-w-xl">
          <TodoCreate createTodo={createTodo} />
          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <TodoComputed
            computedItems={computedItems}
            clearCompleted={clearCompleted}
          />
          <TodoFilter changeFilter={changeFilter} filter={filter} />
        </main>
        <footer className="mt-8 text-center dark:text-gray-400">
          Drag an drop to reorder list
        </footer>
      </div>
    </>
  );
};

export default App;
