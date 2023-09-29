import { useReducer, ReactNode } from "react";
import authReducer from "./authReducer";
import userContext from "./userContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <userContext.Provider value={{ user, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

export default AuthProvider;
