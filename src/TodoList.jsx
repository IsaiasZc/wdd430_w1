import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toogleTodo, deleteTodo }) {
  return (
    <ul className="list">
      { todos.length === 0 && "No todos" }
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toogleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      }
    </ul>
  )
}