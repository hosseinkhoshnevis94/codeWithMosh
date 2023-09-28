import useTodo from "../hooks/useTodo"

const TodoList = () => {
const {data}= useTodo()

  return (
    <ul className="list-group">{
        data?.slice(0,10)?.map(todo => <li className="list-group-item">{todo.id} - {todo.title}</li> )
    }</ul>
  )
}

export default TodoList