import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Outlet />   {}
    </>
  );
}