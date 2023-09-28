import usePosts from "../hooks/usePosts";
import { useState } from "react";

const Posts = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [userId, setUserId] = useState<number>();
  const { data: posts, error } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <div>
        <select
          value={userId}
          className="form-select"
          onChange={(e) => setUserId(parseInt(e.target.value))}
          aria-label="Default select example"
        >
          <option value="" selected>
            Open this select menu
          </option>
          <option value="1">User id 1</option>
          <option value="2">User id 2</option>
          <option value="3">User id 3</option>
        </select>
        <select
          value={userId}
          className="form-select"
          onChange={(e) => setPageSize(Number(e.target.value))}
          aria-label="Default select example"
        >
          <option value="" selected>
            Item per each page
          </option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <ul>
        {posts?.slice(0, 30).map((p) => (
          <li>
            <span className="fs-5 fw-bold">user{p.userId}</span>: {p.title}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setPage(page - 1)}
        disabled={page == 1}
        className="btn btn-primary"
      >
        Pervious
      </button>
      <button
        type="button"
        onClick={() => setPage(page + 1)}
        className="btn btn-primary"
      >
        Next
      </button>
    </>
  );
};

export default Posts;
