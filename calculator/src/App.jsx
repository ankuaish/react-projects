import styles from "./App.module.css";
import { ButtonContainer } from "./Components/ButtonContainer";
import { Display } from "./Components/Display";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("23");
  const onClickButton = (textButtons) => {
    if (textButtons === "C") {
      setCalVal("");
    } else if (textButtons === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + textButtons;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <center>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonContainer onButtonClick={onClickButton} />
        </div>
      </center>
    </>
  );
}

export default App;
