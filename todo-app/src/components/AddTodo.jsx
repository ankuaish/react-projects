import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export const AddTodo = ({ onNewItem }) => {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleName = (event) => {
    setItemName(event.target.value);
  };

  const handleDate = (event) => {
    setDueDate(event.target.value);
  };
  const handleButtonClick = () => {
    onNewItem(itemName, dueDate);
    setItemName("");
    setDueDate("");
  };
  return (
    <>
      <div className="container">
        <div className="row mine-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter To Do Here"
              value={itemName}
              onChange={handleName}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDate} value={dueDate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success mine-button"
              onClick={handleButtonClick}
            >
              <IoIosAddCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
