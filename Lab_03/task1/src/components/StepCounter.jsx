import React, { useState } from 'react';

const StepCounter = ({ initialValue = 0, step = 1 }) => {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);
  const handleUpdate = (type) => {
    const newValue = type === 'inc' ? count + step : count - step;
    
    setCount(newValue);
    setOperationCount(prev => prev + 1);
    setHistory(prevHistory => [newValue, ...prevHistory].slice(0, 5));
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h2>Counter (Step: {step})</h2>
      <p>Current Count: <strong>{count}</strong></p>
      <p>Total Operations: {operationCount}</p>
      
      <button onClick={() => handleUpdate('inc')}>Increment (+{step})</button>
      <button onClick={() => handleUpdate('dec')}>Decrement (-{step})</button>
      <button onClick={reset}>Reset</button>

      <div>
        <h4>Last 5 History:</h4>
        <ul>
          {history.map((val, idx) => <li key={idx}>{val}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default StepCounter;