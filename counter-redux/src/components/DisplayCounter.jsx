import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Counter Value : {counter}</p>
    </>
  );
};
