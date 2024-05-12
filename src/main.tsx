import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Resources from "./pages/resources";
import About from "./pages/about";
import Wordle from "./pages/wordle";
const { BASE_URL } = import.meta.env;

const router = createBrowserRouter([
  {
    path: `${BASE_URL}`,
    element: <App />,
    children: [
      {
        path: `${BASE_URL}`,
        element: <Home />,
      },
      {
        path: `${BASE_URL}/resources`,
        element: <Resources />,
      },
      {
        path: `${BASE_URL}/about`,
        element: <About />,
      },
      {
        path: `${BASE_URL}/wordle`,
        element: <Wordle />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
