import { Modal } from "antd";

export function showConfirm(s, cb) {
  Modal.confirm({
    title: "Confirm",
    content: s,
    onOk: () => {
      cb && cb();
    },
  });
}
