import { useState } from 'react'
import './App.css'

// Counter Component
// Demonstrates React as the view layer: state (count) → component render → UI display
function Counter() {
  // useState hook manages the counter state
  // count: current value (initially 0)
  // setCount: function to update the state and trigger re-render
  const [count, setCount] = useState(0)

  // Handle increment button click
  const handleIncrement = () => {
    setCount(count + 1)
  }

  // Handle decrement button click
  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="container">
      <h1>Counter Component</h1>
      
      {/* Display the current counter value */}
      <div className="counter-display">
        <p>Current Count: <span className="count-value">{count}</span></p>
      </div>
      
      {/* Button controls for incrementing and decrementing */}
      <div className="button-group">
        <button onClick={handleDecrement} className="btn btn-danger">
          Decrement
        </button>
        
        <button onClick={handleIncrement} className="btn btn-success">
          Increment
        </button>
      </div>
      
      {/* Status message showing React's re-rendering */}
      <p className="info-text">
        {count === 0 
          ? "Click a button to start counting" 
          : count > 0 
            ? `You\'ve incremented ${count} times!`
            : `You\'ve decremented ${Math.abs(count)} times!`
        }
      </p>
    </div>
  )
}

// Main App component
function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  )
}

export default App
