import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

export const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch(counterActions.sub(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        {/* <button type="button" class="btn btn-secondary">
        Secondary
      </button> */}
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-dark" onClick={handlePrivacy}>
          Privacy toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control">
        <input type="text" ref={inputElement} />
        <button type="button" className="btn btn-danger" onClick={handleAdd}>
          Add
        </button>
        <button type="button" className="btn btn-warning" onClick={handleSub}>
          Subtract
        </button>
      </div>
    </>
  );
};
