import { AddTodo } from "./components/AddTodo";
import { AppName } from "./components/AppName";
import { EveryItem } from "./components/EveryItem";
import "./App.css";
import { useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";

function App() {
  let startTodoDetails = [
    {
      name: "Buy Milk",
      date: "6/23/2024",
    },
    {
      name: "Eat food",
      date: "5/23/2024",
    },
    {
      name: "Sleep",
      date: "4/23/2024",
    },
  ];

  const [todoDetails, setTodoDetails] = useState(startTodoDetails);
  const handleNewItem = (itemName, dueDate) => {
    // const newTodoItem = [...todoDetails, { name: itemName, date: dueDate }];
    // setTodoDetails(newTodoItem);

    // setTodoDetails((currValue) => {
    //   const newTodoItem = [...currValue, { name: itemName, date: dueDate }];
    //   return newTodoItem;
    // });

    setTodoDetails((currValue) => [
      ...currValue,
      { name: itemName, date: dueDate },
    ]);
  };
  const handleDelete = (itemTodo) => {
    // console.log(`item deleted : ${itemTodo}`);
    const newTodoItem = todoDetails.filter((item) => item.name !== itemTodo);
    setTodoDetails(newTodoItem);
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />

        {todoDetails.length === 0 && <WelcomeMessage />}
        <EveryItem todoItem={todoDetails} onClickDelete={handleDelete} />
      </center>
    </>
  );
}

export default App;
