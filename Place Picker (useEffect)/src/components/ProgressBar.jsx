import { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
          console.log("timer is running");
          setRemainingTime((prevTime) => prevTime - 10);
        }, 10);
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <progress value={remainingTime} max={timer} />
  )
}

export default ProgressBar