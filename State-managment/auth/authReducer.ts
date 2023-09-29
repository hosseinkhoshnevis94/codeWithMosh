

interface LoginUser{
type:'LOGIN',
user:string
}
interface LogoutUser{
type:'LOGOUT',
}
export type AuthAction = LoginUser| LogoutUser

const authReducer = (status:string,action:AuthAction) => {
if(action.type=='LOGIN') return action.user
if(action.type=='LOGOUT') return ''
return status
}

export default authReducer