import styles from "./Display.module.css";

export const Display = ({displayValue}) => {
  return (
    <>
      {" "}
      <input
        type="text"
        className={styles.display}
        value={displayValue}
        readOnly
      />
    </>
  );
};
