import TodoItem from "./TododItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='list'>
      {todos.length === 0 && <p>No items to display</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
