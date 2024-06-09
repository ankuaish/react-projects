import { useSelector } from "react-redux";

export const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Counter Value : {counterVal}</p>
    </>
  );
};
