import { useReducer } from "react";
import counterStore from "./store/store";
import useCounterStore from "./store/store";

const Counter = () => {
  //   const [value, setValue] = useState(0);
  // const[state,setState] = useReducer(counterReducer,0)
  const state = useCounterStore()
  
  // or you can destructuring: const {state,increase,decrease,reset} = useCounterStore()
  // return (
  //   <div>
  //     <div>Counter: {state}</div>
  //     <button onClick={()=>setState({type:'INC'})}className="btn btn-primary mx-1">Increment</button>
  //     <button onClick={()=>setState({type:'RESET'})}className="btn btn-primary mx-1">Reset</button>
  //     <button onClick={()=>setState({type:'DEC'})}className="btn btn-primary mx-1">Decrement</button>
  //   </div>
  // );
  return (
    <div>
      <div>Counter: {state.counter}</div>
      <button onClick={() =>  state.increase() }className="btn btn-primary mx-1">Increment</button>
      <button onClick={()=> state.reset()}className="btn btn-primary mx-1">Reset</button>
      <button onClick={()=>  state.decrease()}className="btn btn-primary mx-1">Decrement</button>
    </div>
  );
};

export default Counter;
