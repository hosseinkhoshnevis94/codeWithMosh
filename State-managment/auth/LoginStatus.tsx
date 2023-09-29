import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  // const { user, dispatch } = useAuth();
  const {user,login,logout} = useAuthStore()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() =>logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => login('Hello Hossein')}
        href="#"
      >
        Login
      </a>
    </div>
  );
  // if (user)
  //   return (
  //     <>
  //       <div>
  //         <span className="mx-2">{user}</span>
  //         <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
  //           Logout
  //         </a>
  //       </div>
  //     </>
  //   );
  // return (
  //   <div>
  //     <a
  //       onClick={() => dispatch({ type: "LOGIN", user: "Hello Hossein" })}
  //       href="#"
  //     >
  //       Login
  //     </a>
  //   </div>
  // );
};

export default LoginStatus;
