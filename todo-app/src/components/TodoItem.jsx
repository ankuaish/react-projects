import { MdDelete } from "react-icons/md";
export const TodoItem = ({ items, date, onClickDelete }) => {
  return (
    <>
      {" "}
      <div className="container">
        <div className="row mine-row">
          <div className="col-6">{items}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger mine-button"
              onClick={() => onClickDelete(items)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
