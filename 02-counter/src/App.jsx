import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);
  // let counter = 15

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const reduceValue = () => {
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>React Course by Arham {counter} </h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={reduceValue}>Reduce value</button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
