import { useQuery } from "@tanstack/react-query"
import axios from "axios"


interface Post{
    userId:number,
    id:number,
    title:string,
    body:string
  }
  interface PostQuery{
    // userId:number| undefined,
    pageSize: number,
    page:number
  }


const usePosts = (query:PostQuery) => {
    const fetchPosts = () =>
        axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params:{
                // userId:query.userId,
                _start:(query.page - 1) * query.pageSize,
                _limit:query.pageSize
            }
        })
        .then(res => res.data)
        return useQuery<Post[],Error>({
            queryKey:['posts',query],
            queryFn:fetchPosts,
            retry:1,
            cacheTime:10_000,
            staleTime:10_000,
            keepPreviousData:true
        })
    }


export default usePosts