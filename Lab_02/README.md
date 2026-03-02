# Lab 1.2: React Project Setup & Minimal App
## README: Counter Component Implementation

### Overview
This lab demonstrates React as the view layer by implementing a Counter component that manages state and automatically updates the UI when state changes. The component uses React hooks (useState) and Vite as the build tool.

Chapter 1 Alignment:
- **"Setting up a new React project"** — Uses Vite for quick project initialization
- **"React is just the view layer"** — Counter component demonstrates translating state to UI
- **"Performance matters"** — Virtual DOM ensures efficient re-renders

### Project Structure
```
Lab_02/task1/
├── src/
│   ├── App.jsx              # Main Counter component
│   ├── App.css              # Counter styling
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   └── assets/
├── public/
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

### Prerequisites
- **Node.js** v16 or higher: [https://nodejs.org/](https://nodejs.org/)
- **npm** v7 or higher (comes with Node.js)

Verify installation:
```bash
node --version
npm --version
```

### Task 1: Project Setup

#### How This Project Was Created
```bash
npm create vite@latest . -- --template react
npm install
```

This command created a Vite React project with:
- React 18+ configured
- Development server (fast HMR - Hot Module Replacement)
- Optimized production build
- ESLint configuration

#### Documentation
Project Details:
- **Build Tool:** Vite 7.3+
- **React Version:** 18.3.0
- **Package Manager:** npm
- **Entry Point:** src/main.jsx → src/App.jsx
- **Dev Server:** http://localhost:5173 (by default)

### Task 2: Counter Component Implementation

#### How to Run Locally

**Step 1: Navigate to Project**
```bash
cd Lab_02/task1
```

**Step 2: Ensure dependencies are installed**
```bash
npm install
```

**Step 3: Start development server**
```bash
npm run dev
```

**Step 4: Open in browser**
The terminal will display:
```
  ➜  Local:   http://localhost:5173/
```
Click the link or manually open that URL.

#### Component Features

The Counter component demonstrates key React concepts:

**1. State Management with useState**
```javascript
const [count, setCount] = useState(0)
```
- `count`: Current counter value (initially 0)
- `setCount`: Function to update state and trigger re-render

**2. Event Handlers**
```javascript
const handleIncrement = () => {
  setCount(count + 1)
}

const handleDecrement = () => {
  setCount(count - 1)
}
```
- onClick handlers update state
- State changes automatically trigger re-render

**3. Declarative UI Rendering**
```jsx
<p>Current Count: <span className="count-value">{count}</span></p>
```
- UI always reflects current state value
- No manual DOM manipulation needed
- React handles Virtual DOM diffing and patching

**4. Conditional Rendering**
```jsx
{count === 0 
  ? "Click a button to start counting" 
  : count > 0 
    ? `You've incremented ${count} times!`
    : `You've decremented ${Math.abs(count)} times!`
}
```
- Different messages based on state value
- Automatically updates on state change

#### Usage
1. Click "Increment" to add 1 to the counter
2. Click "Decrement" to subtract 1 from the counter
3. The display updates instantly
4. The info message changes based on counter value
5. Counter can go negative

#### Visual Design
- **Color Scheme:** Purple gradient display, green increment button, red decrement button
- **Responsive:** Works on mobile and desktop
- **Smooth Transitions:** Button hover effects for better UX
- **Typography:** Clear, readable font sizes

### Task 3: View Layer Explanation

#### How React Acts as the View Layer

**Data → Component → UI Rendering Pipeline:**

1. **Data (State)**
   ```javascript
   const [count, setCount] = useState(0)
   ```
   - Count is a number stored in React's state
   - This is the single source of truth

2. **Component (Logic)**
   ```javascript
   function Counter() {
     // ... state and handlers ...
     return <div>... {count} ...</div>
   }
   ```
   - Component receives state and renders accordingly
   - OnClick handlers trigger state updates

3. **UI (Display)**
   - Browser displays the rendered HTML/CSS
   - Reflects current state value

**Example Flow:**
```
Initial:    [State: count=0] → [Component renders] → [Display shows "0"]
User clicks:    [Calls setCount(1)] → [React re-renders] → [Display shows "1"]
User clicks:    [Calls setCount(2)] → [React re-renders] → [Display shows "2"]
```

#### Virtual DOM & Diffing/Patching

When state changes:
1. **Re-render:** React runs the component function again
2. **Virtual DOM Creation:** Generates in-memory representation of new UI
3. **Diffing:** Compares old Virtual DOM with new Virtual DOM
4. **Patching:** Only updates the DOM nodes that actually changed

Example: When count updates from 0→1:
- Only the `<span className="count-value">` content changes
- Buttons and other elements are NOT re-rendered
- This optimization happens automatically

Benefit:
- Direct DOM updates are slow
- Virtual DOM diffing is fast
- Minimal DOM operations = better performance
- Scalable to complex applications

#### Why React as View Layer?

React handles ONLY presentation:
- ✅ **Does:** Render data to UI, update when data changes
- ❌ **Does NOT:** Routing, HTTP requests, global state management (outside component)

This separation of concerns is powerful:
- UI logic is predictable and testable
- Other libraries handle other concerns
- Component can be reused with different data

#### Scalability

**Single Counter is simple but demonstrates scalability:**

If we need multiple counters:
```javascript
function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}
```

Each Counter has its own state, independent and isolated. This scales to thousands of components without coordination.

### Available Scripts

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint code quality checks
npm run lint
```

### Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React     | 18.3.0  | UI library (view layer) |
| React-DOM | 18.3.0  | DOM rendering |
| Vite      | 7.3.0   | Build tool & dev server |
| JavaScript| ES6+    | Component logic |
| CSS3      | -       | Styling |

### Code Quality

All code adheres to:
- **Consistent Naming:** camelCase for functions/variables, PascalCase for components
- **Comments:** Code explanations for non-obvious logic
- **Manual Typing:** Counter logic manually typed (Vite scaffolding was boilerplate)
- **No Copy-Paste:** Logic written specifically for this lab

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires ES6+ support (modern browsers only).

### Key Takeaways

1. **React is the View Layer:** It translates state to UI, nothing more
2. **State Drives UI:** UI always matches current state value
3. **Automatic Re-rendering:** setState triggers re-render, no manual DOM updates
4. **Virtual DOM:** React optimizes performance through diffing/patching
5. **Scalable Pattern:** Component-based architecture scales to any complexity

### Troubleshooting

**Port 5173 already in use:**
```bash
npm run dev -- --port 3000
```

**Dependencies not installed:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Hot reload not working:**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart dev server (npm run dev)

### References

- React Docs: https://react.dev
- Vite Docs: https://vite.dev
- "React and React Native, Fifth Edition" - Chapter 1: "Setting up a new React project"

---

**Submission Date:** March 3, 2026  
**Student:** Assem Kemal  
**Lab:** Lab 1.2 - React Project Setup & Minimal App
