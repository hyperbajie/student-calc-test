import { useNavigate } from "react-router-dom";
import { showConfirm } from "./Confirm";
import { Button, message } from "antd";
import "./Home.css";

// 返回按钮
export function ReturnBtn(props) {
  let navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        showConfirm("是否确认离开", () => {
          navigate("/");
        });
      }}
    >
      {props.btnName || "返回"}
    </Button>
  );
}

export function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="btn-row">
        <Button
          onClick={() => {
            navigate("/paper");
          }}
        >
          十题测验
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            message.warn("暂未开发",1);
            // navigate("/test");
          }}
        >
          练习
        </Button>
      </div>
    </div>
  );
}
