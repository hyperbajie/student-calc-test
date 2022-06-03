import { useNavigate } from "react-router-dom";
export function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/paper");
        }}
      >
        十题测验
      </button>
      <button
        onClick={() => {
          navigate("/test");
        }}
      >
        练习
      </button>
    </div>
  );
}
