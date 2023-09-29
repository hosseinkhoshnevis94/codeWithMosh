import { ReactNode, useReducer } from "react";
import tasksContext from "./tasksContext";
export interface Task{
  id:number,
  title:string
}
interface AddTask{
type:"ADD",
task:Task
}
interface RemoveTask{
  type:"REMOVE",
  task:Task
}
interface Props {
  children: ReactNode;
}
export type TaskAction= AddTask | RemoveTask

const taskReducer = (tasks:Task[],action:TaskAction) :Task[]  => {
  switch(action.type){
      case "ADD":  return [...tasks,action.task]
      case "REMOVE" : return tasks.filter(t => t.id!==action.task.id)
      
  }
}
const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <tasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </tasksContext.Provider>
  );
};

export default TaskProvider;
