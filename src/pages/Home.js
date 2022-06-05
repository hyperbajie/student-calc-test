import { useNavigate } from "react-router-dom";
import "./Home.css";

// 返回按钮
export function ReturnBtn(props) {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      {props.btnName || "返回"}
    </button>
  );
}

export function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="btn-row">
        <button
          onClick={() => {
            navigate("/paper");
          }}
        >
          十题测验
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/test");
          }}
        >
          练习
        </button>
      </div>
    </div>
  );
}
