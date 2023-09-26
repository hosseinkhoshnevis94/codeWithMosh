import apiClient from "./api-client";

export interface User {
    id: number;
    name: string;
  }

class UserServices{
    getAllUsers(){
    const controller = new AbortController();
    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      return{request,cancel:()=>controller.abort()}
    }
    deleteUser(userId:number){
        return apiClient
        .delete(`/users/${userId}`)
    }
    addUser(newUser:{id:number,name:string}){
       return apiClient
        .post('/users',newUser)
    }
    updateUser(userId:number,updatedUser:{id:number,name:string}){
       return apiClient
    .patch(`/users/${userId}`,updatedUser)
    }
}

export default new UserServices