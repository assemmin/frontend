import { useState } from 'react'
import './App.css'

function App() {
  // Declarative approach: state drives the UI
  // isHighlighted boolean controls whether the paragraph has the highlight class
  const [isHighlighted, setIsHighlighted] = useState(false)

  // Handle button click by toggling the state
  const handleToggle = () => {
    setIsHighlighted(!isHighlighted)
  }

  return (
    <div className="container">
      <h1>Declarative Toggle Highlight (React)</h1>
      
      {/* Button that triggers state change */}
      <button onClick={handleToggle}>
        {isHighlighted ? 'Remove Highlight' : 'Add Highlight'}
      </button>
      
      {/* Paragraph: className depends on state, not DOM manipulation */}
      <p className={isHighlighted ? 'highlight' : ''}>
        This is a paragraph that demonstrates the declarative approach to UI updates.
        When you click the button above, React updates the state, which automatically
        causes a re-render. The UI always matches the current state. This is more
        maintainable and predictable than imperative DOM manipulation.
      </p>
    </div>
  )
}

export default App
