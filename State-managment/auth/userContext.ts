import { AuthAction } from "./authReducer"
import React ,{Dispatch}from 'react'

interface UserContext{
    user:string,
    dispatch:Dispatch<AuthAction>

}


const userContext = React.createContext<UserContext>({} as UserContext)

export default userContext