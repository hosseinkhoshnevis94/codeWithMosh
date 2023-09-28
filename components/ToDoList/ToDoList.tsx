import useTodos from "../../hooks/useTodos";



const ToDoList = () => {
  const { data:todos,error,isLoading } = useTodos()
  if(isLoading) return <p>Loading...</p>
  if(error) return <div>{error.message}</div>
  return (
    <ul>
      {todos?.slice(0, 10).map((t) => (
        <li key={t.id}>
          {t.id}-{t.title}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
