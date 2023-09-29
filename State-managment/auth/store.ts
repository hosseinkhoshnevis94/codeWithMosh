import {create} from 'zustand'


interface UseAuthStore{
    user:string,
    login:(userName:string) => void,
    logout:()=>void
    
}


const useAuthStore = create<UseAuthStore>((set) =>({
user:'',
login:(userName) => set(()=> ({user:userName})),
logout:()=> set(() => ({user:''}) )
}))


export default useAuthStore