import { TodoItem } from "./TodoItem";
import styles from "./EveryItem.module.css";

export const EveryItem = ({ todoItem, onClickDelete }) => {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItem.map((item) => (
          <TodoItem
            key={item.name}
            items={item.name}
            date={item.date}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
    </>
  );
};
