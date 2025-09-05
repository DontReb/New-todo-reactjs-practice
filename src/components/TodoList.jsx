import TodoCard from "./TodoCard";

export default function TodoList(props) {

  const { todos } = props;

  return (
    <div>
        <TodoCard todos={todos} />
    </div>
  )
}
