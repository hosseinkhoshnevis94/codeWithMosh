import { useReducer } from "react";

import counterReducer from "./reducer/counterReducer";

const Counter = () => {
  //   const [value, setValue] = useState(0);
  const[state,setState] = useReducer(counterReducer,0)

  return (
    <div>
      <div>Counter: {state}</div>
      <button onClick={()=>setState({type:'INC'})}className="btn btn-primary mx-1">Increment</button>
      <button onClick={()=>setState({type:'RESET'})}className="btn btn-primary mx-1">Reset</button>
      <button onClick={()=>setState({type:'DEC'})}className="btn btn-primary mx-1">Decrement</button>
    </div>
  );
};

export default Counter;
