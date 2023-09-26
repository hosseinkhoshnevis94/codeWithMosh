import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button";
import apiClient from "../../services/api-client";
import UserServices, { User } from "../../services/user-service";
import userService from "../../services/user-service";


const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const handleDelete = (userId: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((item) => item.id !== userId));
    UserServices.deleteUser(userId)
    .catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  const handleAddUser = () => {
    const newUser = { id: 11, name: "Hossein" };
    const originalUsers = [...users]
    const exic = users.some(item=>item.id==newUser.id)
    if(!exic){
      setUsers([newUser,...users])
     UserServices.addUser(newUser)
      .then(res=> {console.log(res)})
      .catch(err=>{setError(err.message);setUsers(originalUsers)})
    }
    
  };
  const handleUpdate = (user:User) =>{
    const originalUsers = [...users]
    const updetedUser ={...user,name:`${user.name}-UPDATED`}
    setUsers(users.map(item=>item.id==user.id ? updetedUser : item))
    UserServices.updateUser(user.id,updetedUser)
    .catch(err=>{setError(err.message);setUsers(originalUsers)})
  
  
  }
  useEffect(() => {
    const{request,cancel} = UserServices.getAllUsers()
    request
      .then((res) => {
        setError("");
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => cancel()
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {loading && <p className="spinner-border"></p>}
      <ul className="list-group ">
        {users.slice(0, 10).map((user) => (
          <>
            <li
              className="list-group-item d-flex justify-content-between"
              key={user.id}
            >
              <div>
                {user.id} - {user.name}
              </div>
              <Button color="danger" onClick={() => handleDelete(user.id)}>
                Delete
              </Button>
              <Button color="light" onClick={() => handleUpdate(user)}>
                Update
              </Button>
            </li>
          </>
        ))}
        <Button color="success" onClick={handleAddUser}>
          Add
        </Button>
      </ul>
    </>
  );
};

export default Users;
