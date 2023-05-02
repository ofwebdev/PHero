import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Phone from "./components/Phone.jsx";
import Details from "./components/Details.jsx";
import Main from "./components/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/phone",
        element: <Phone />,
        loader: () => fetch("http://localhost:3000/data"),
      },
      {
        path: "/phone/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/data/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
