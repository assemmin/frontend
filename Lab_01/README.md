# Lab 1.1: Declarative vs Imperative React Fundamentals
## README: How to Run Both Implementations

### Overview
This lab demonstrates the fundamental difference between imperative (jQuery) and declarative (React) approaches to building user interfaces. Both implementations provide identical functionality: a button that toggles a highlight effect on a paragraph.

### Project Structure
```
Lab_01/
├── task1/
│   └── imperative.html          # jQuery imperative implementation
├── task2/                        # Vite React project (declarative implementation)
│   ├── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── COMPARISON_REPORT.md          # Task 3: Written comparison
└── README.md                     # This file
```

## Task 1: Imperative Implementation (jQuery)

### How to Run
Simply open the file in a web browser:

**Option 1: Direct File Opening**
```bash
# Navigate to the task1 directory
cd Lab_01/task1

# Open the HTML file in your default browser
open imperative.html
```

**Option 2: Using a Local Server** (recommended for consistent behavior)
```bash
# From Lab_01/task1, start a simple HTTP server
python3 -m http.server 8000

# Then open: http://localhost:8000/imperative.html
```

### How It Works
- **File:** `task1/imperative.html`
- **Library:** jQuery 3.6.0 (loaded from CDN)
- **Approach:** Imperative step-by-step DOM manipulation
  - Attaches a click handler to the button using jQuery
  - On click, toggles the `.highlight` CSS class on the paragraph
  - The class is added/removed directly via jQuery's `.toggleClass()` method

### What to Expect
1. You'll see a button labeled "Toggle Highlight"
2. The paragraph below starts without a highlight
3. Click the button to add a yellow background (highlight class)
4. Click again to remove it
5. The toggle works indefinitely

### Technologies Used
- HTML5
- CSS3 (for styling and transitions)
- jQuery 3.6.0 (for DOM manipulation)

---

## Task 2: Declarative Implementation (React)

### Prerequisites
Ensure you have Node.js and npm installed:
```bash
node --version  # Should be v16 or higher
npm --version   # Should be v7 or higher
```

### How to Run

**Step 1: Navigate to the React Project**
```bash
cd Lab_01/task2
```

**Step 2: Install Dependencies** (if not already installed)
```bash
npm install
```

**Step 3: Start the Development Server**
```bash
npm run dev
```

**Step 4: Open in Browser**
The terminal will display:
```
Local:   http://localhost:5173
```
Open that URL in your browser.

### How It Works
- **Entry Point:** `index.html` → `src/main.jsx` → `src/App.jsx`
- **Component:** React functional component with `useState` hook
- **Approach:** Declarative state-driven rendering
  - Uses `useState(false)` to manage the `isHighlighted` boolean
  - The button's onClick handler calls `setIsHighlighted(!isHighlighted)`
  - The paragraph's className is determined by the state: `className={isHighlighted ? 'highlight' : ''}`
  - React automatically re-renders when state changes, updating only what's necessary

### What to Expect
1. You'll see a button labeled "Add Highlight"
2. The paragraph below starts without highlight
3. Click the button to add yellow background (the button text changes to "Remove Highlight")
4. Click again to remove it
5. The toggle works indefinitely

### Technologies Used
- React 18+ (with hooks)
- Vite (build tool and dev server)
- JSX (syntax for describing UI)
- CSS3 (for styling)

### To Stop the Development Server
Press `Ctrl+C` in the terminal running `npm run dev`.

---

## Comparing the Implementations

### jQuery (Imperative)
**Pros:**
- Lightweight, no build step required
- Works in any browser with jQuery loaded
- Direct DOM manipulation is transparent

**Cons:**
- State is implicit (stored in the DOM)
- Requires manual DOM selection and manipulation
- Harder to test and maintain as complexity grows
- No automatic UI synchronization with state

**Key Pattern:**
```javascript
// Tell jQuery: select this element, attach a handler, toggle a class
$('#button').click(function() {
    $('#paragraph').toggleClass('highlight');
});
```

### React (Declarative)
**Pros:**
- State is explicit and centralized
- Automatic re-rendering ensures UI matches state
- Scales well to complex applications
- Easier to test and maintain
- Reusable components

**Cons:**
- Requires a build step (Vite in this case)
- Node.js and npm required
- Slightly more boilerplate for simple cases

**Key Pattern:**
```javascript
// Describe: if isHighlighted, show the class; otherwise don't
const [isHighlighted, setIsHighlighted] = useState(false);
<p className={isHighlighted ? 'highlight' : ''}>...</p>
```

---

## Task 3: Comparison Report

A detailed written comparison has been provided in `COMPARISON_REPORT.md`.

This report:
- Explains imperative vs. declarative approaches
- Discusses how React's state-driven model avoids manual DOM steps
- References Chapter 1 concepts from "React and React Native, Fifth Edition"
- Analyzes scalability differences
- Includes approximately 900 words of analysis

---

## Important Notes

### Styling Consistency
Both implementations use the same CSS styles:
- `.highlight { background-color: yellow; font-weight: bold; }`
- Smooth transitions via CSS `transition: background-color 0.3s ease`
- Both validate that the visual output is identical

### Browser Compatibility
- **jQuery version:** Works in all modern browsers
- **React version:** Requires a modern browser with ES6+ support

### Code Typing
All code in both implementations was manually typed (not copy-pasted from templates), as per the lab requirements. The Vite scaffolding generated boilerplate code, which was then manually replaced with the toggle implementations.

---

## Summary

| Aspect | jQuery (Imperative) | React (Declarative) |
|--------|---------------------|----------------------|
| Setup | Open HTML file | Run npm commands |
| State Management | Implicit (DOM) | Explicit (useState) |
| DOM Updates | Manual (toggleClass) | Automatic (re-render) |
| Complexity Scaling | Poor | Excellent |
| Maintainability | Low | High |
| Testing | Difficult | Easy |
| Performance | Manual | Optimized (Virtual DOM) |

Both implementations correctly solve the problem, but they demonstrate why React's declarative approach has become the industry standard for modern web development.

---

**Submission Date:** March 3, 2026  
**Student:** Assem Kemal  
**Lab:** Lab 1.1 - React Fundamentals
