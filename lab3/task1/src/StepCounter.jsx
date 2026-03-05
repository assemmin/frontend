import { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {

  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newValue = count + step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newValue = count - step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{border:"1px solid black", padding:"20px", margin:"10px"}}>
      <h2>Step Counter</h2>

      <p>Current Count: {count}</p>
      <p>Total Operations: {operationCount}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <h4>Last values:</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default StepCounter;