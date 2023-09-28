import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Todo{
userId: number,
id: number,
title: string | undefined,
completed: boolean
}


const useTodo = () =>{
const fetchData = () => axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
.then(res => res.data)
return useQuery<Todo[]>({
    queryKey:['todos'],
    queryFn:fetchData
})

}


export default useTodo