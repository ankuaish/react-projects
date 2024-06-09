import React from "react";
import { useRef } from "react";

import { useDispatch } from "react-redux";

export const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADDITION",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handleSub = () => {
    dispatch({
      type: "SUB",
      payload: { num: inputElement.current.value },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({
      type: "PRIVACY_TOGGLE",
    });
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
