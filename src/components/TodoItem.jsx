import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TodoItem = ({ todoMap, removeTodo, updateTodo }) => {
  const { id, title, completed } = todoMap;
  return (
    <>
      <article className="flex gap-4 border-b border-b-gray-400">
        <button
          className={`h-5 w-5 flex-none rounded-full border-2 ${
            completed
              ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
          }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <IconCheck />}
        </button>
        <p
          className={`grow text-gray-600 dark:text-gray-300 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
          <IconCross />
        </button>
      </article>
    </>
  );
};

export default TodoItem;
