import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div>
      <h2>Something went wrong</h2>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;