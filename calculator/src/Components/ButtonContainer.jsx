import styles from "./ButtonContainer.module.css";

export const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      {" "}
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttons) => (
          <button
            key={buttons}
            className={styles.button}
            onClick={() => onButtonClick(buttons)}
          >
            {" "}
            {buttons}
          </button>
        ))}
      </div>
    </>
  );
};
