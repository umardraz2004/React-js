import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const Timer = 5000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("timer is set");
    const timer = setTimeout(() => {
      onConfirm();
    }, Timer);
    return () => {
      console.log("timer is cleared");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={Timer} />
    </div>
  );
}
