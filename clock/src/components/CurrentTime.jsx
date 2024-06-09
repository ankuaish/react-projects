import { useEffect } from "react";
import { useState } from "react";

export const CurrentTime = () => {
  const [timer, setTimer] = useState(new Date());
  useEffect(() => {
    // console.log("start the date");
    const IntervalId = setInterval(() => {
      setTimer(new Date());
    }, 1000);
    return () => {
      clearInterval(IntervalId);
      // console.log("cancel the interval");
    };
  }, []);
  return (
    <p className="leading">
      The current time is : {timer.toLocaleDateString()} -{" "}
      {timer.toLocaleTimeString()}
    </p>
  );
};
