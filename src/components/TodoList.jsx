import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  return (
    <>
      <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
        {todos.map((todoMap) => (
          <TodoItem
            key={todoMap.id}
            todoMap={todoMap}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
