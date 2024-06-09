export const TodoItem2 = () => {
  let itemName = "go To College";
  let date = " 5/23/2024";
  return (
    <>
      {" "}
      <div className="container">
        <div className="row mine-row">
          <div className="col-6">{itemName}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger mine-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
