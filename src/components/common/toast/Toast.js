import { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import "./Toast.css";

const Toast = ({ visible, onClose, message, type, duration = 2000 }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (visible) {
      setProgress(100);

      const decrementValue = 100 / (duration / 100);

      const interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - decrementValue, 0));
      }, 100);

      const timeout = setTimeout(() => {
        console.log(visible);
        onClose();
        console.log(visible);
      }, duration);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [visible, duration, onClose]);

  return (
    <div
      className={visible ? "wrapper-container" : "wrapper-container-disable"}
    >
      <div className={`toast-container ${type}-msg`}>
        <i style={{ marginRight: "5px" }}>
          {type === "success" && <AiOutlineCheckCircle />}
          {type === "error" && <AiOutlineCloseCircle />}
          {type === "warning" && <AiOutlineExclamationCircle />}
          {type === "info" && <AiOutlineInfoCircle />}
        </i>
        {message}
        <div
          className={`toast-progress ${type}-progress`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
