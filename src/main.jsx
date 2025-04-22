// import these:
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import all pages
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import MoreProjects from "./pages/MoreProjects";
import About from "./pages/About";
import Contact from "./pages/Contact";

// create the client-side routing for the app -- define which component(page) corresponds to which URL(path)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "more-projects",
        element: <MoreProjects />,
      },
    ],
  },
]);

// implements the router created above
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
