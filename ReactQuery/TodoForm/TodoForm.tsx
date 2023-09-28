import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { Todo } from "../hooks/useTodo";
import Alert from "../../Alert";

const TodoForm = () => {
  const [showError, setShowError] = useState(false);
  const titleInput = useRef<HTMLInputElement>(null);
  let newTodo = {
    id: 1000,
    title: titleInput?.current?.value,
    userId: 1,
    completed: true,
  };
  const addTodoFn = (todo: Todo) =>
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then((res) => res.data);

  const addTodo = useMutation({
    mutationFn: addTodoFn,
    onSuccess: () => alert('Success'),
    onError: () => setShowError(true),
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (titleInput.current?.value) {
      addTodo.mutate(newTodo);
      titleInput.current.value = "";
    }
  };

  return (
    <>
      {showError && (
        <Alert dismissable onClose={() => setShowError(false)}>
          Somthing went Wrong,Try Later!
        </Alert>
      )}
      <form
        onSubmit={handleSubmit}
        className=" mb-2 d-flex justify-content-between"
      >
        <input ref={titleInput} type="text" />
        <button
          disabled={addTodo.isLoading}
          type="submit"
          className="btn btn-primary"
        >
          {addTodo.isLoading ? "IsLoading" : "Add Todo"}
        </button>
      </form>
    </>
  );
};

export default TodoForm;
