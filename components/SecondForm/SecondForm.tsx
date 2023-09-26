import { useState } from "react";

const SecondForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  const handleSumbit = (e:any) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <>
      <form
        onSubmit={handleSumbit}
        style={{ padding: "20px 40px", border: "1px solid #c3c3c3" }}
      >
        <div>Second form</div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            type="text"
            className="form-control"
            value={person.name}
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={person.age}
            onChange={(e) =>
              setPerson({ ...person, age: parseInt(e.target.value) })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SecondForm;
