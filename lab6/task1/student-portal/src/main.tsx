import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import NotFound from "./NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
       { index: true, element: <Home/>},
       { path: "courses", element: <Courses/>},
       { path: "about", element: <About/>},
       { path: "*", element: <NotFound/>},
    ],
  },
]);
ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);