import { useForm } from "react-hook-form";

interface FormData {
  name:string,
  age:number
}
const ThirdForm = () => {
  const { register, handleSubmit, formState:{errors,isValid} } = useForm<FormData>();
  const onSubmit = (data:FormData) => {console.log(data)
  }

  
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: "20px 40px", border: "1px solid #c3c3c3" }}
      >
        <div>Second form</div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name",{required:true,minLength:3})}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
          {errors.name?.type==='required' && <div className="text-danger">This field is requierd!</div> }
          {errors.name?.type=='minLength' && <div className="text-danger">Minlenght min 3 charachter!</div> }
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age",{required:true,min:18})}
            type="number"
            className="form-control"
            id="age"
          />
          {errors.age?.type==='required' && <div className="text-danger">This field is requierd!</div> }
        </div>
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ThirdForm;
