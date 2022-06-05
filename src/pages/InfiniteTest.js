import { useNavigate } from "react-router-dom";

export function InfiniteTest() {
  let navigate = useNavigate();
  return (
    <div>
      infinite test
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        返回
      </button>
    </div>
  );
}
