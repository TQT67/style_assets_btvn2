import "./App.css";
import React, { useState } from "react";
import styles from "./style.module.css";

const App = () => {
  const [time, setTime] = useState("day");
  const handleClick = (newTime) => {
    setTime(newTime);
  };
  return (
    <>
      <button onClick={() => handleClick("day")}>Day</button>
      <button onClick={() => handleClick("night")}>Night</button>
      <div className={time === "day" ? styles.dayColor : styles.nightColor} />
    </>
  );
};

export default App;
