import { useNavigate } from "react-router-dom";
export function TestPaper() {
  let navigate = useNavigate();
  return (
    <div>
      test paper you know
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
