import { useState } from "react";
import Button from "../Button";

const Bugs = () => {
  const [bugs, setBugs] = useState([
    { id:1, title: "Bug 1", fixed: false },
    { id:2, title: "Bug 2", fixed: false },
    { id:3, title: "Bug 3", fixed: true },
  ]);

  const  handleFixed = () =>{
    setBugs(

        bugs.map(item => item.id==1 ? {...item,fixed:true} : item)
        )
    console.log('hi');
    
  }
  return (
    <>
      <div>Update arrays of objects:</div>
      {bugs.map((item) => (
        <>
        <div>{item.title}-{item.fixed ? 'Yes' : "No"}</div>
        </>
      ))}
      <Button onClick={handleFixed}>fixed item 1</Button>
    </>
  );
};

export default Bugs;
