import axios from "axios";
import { useQuery } from "@tanstack/react-query";


interface Todos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

const useTodos = () =>{
    const fetchingDate = () =>
    axios
.get<Todos[]>("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.data)
return useQuery<Todos[],Error,Todos[],string[]>({
    queryKey:['todos'],
    queryFn:fetchingDate,
    staleTime:0

  });

}

export default useTodos