import {useContext} from 'react'
import tasksContext from './tasksContext';

//instead of command+P, use command+T for seraching !

const useTask = () => useContext(tasksContext)

const TaskList = () => {
  // const [tasks, setTasks] = useState<Task[]>([]);
  const { tasks, dispatch } = useTask();
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "task" + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "REMOVE", task })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
