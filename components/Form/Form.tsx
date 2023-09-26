import { useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const personData = {name:'', age:0}
  const handleSumbit = (e:any) => {
    e.preventDefault();
     if(nameRef.current!==null) {personData.name = nameRef.current?.value}
     if(ageRef.current!==null) {personData.age = parseInt(ageRef.current?.value)}
     console.log(personData);
     
  };
  return (
    <>
      <form
        onSubmit={handleSumbit}
        style={{ padding: "20px 40px", border: "1px solid #c3c3c3" }}
        >
          <div>Form-1</div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input  ref={ageRef} type="number" className="form-control" id="age" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
