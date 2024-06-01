import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Resources from "./pages/resources";
import About from "./pages/about";
import ReactTable from "./pages/react-table";
import ApiPage from "./pages/api-page";
import { StyleSheetManager } from "styled-components";
const { BASE_URL } = import.meta.env;
import isPropValid from "@emotion/is-prop-valid";

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
        path: `${BASE_URL}/react_table`,
        element: <ReactTable />,
      },
      {
        path: `${BASE_URL}/api_page`,
        element: <ApiPage />,
      },
    ],
  },
]);

//This defaults the behavior of styled-components to v5 so you don't get the console error
//That requires switching to transient props
function shouldForwardProp(propName: string, target: any) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <RouterProvider router={router} />
    </StyleSheetManager>
  </React.StrictMode>
);
