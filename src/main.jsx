import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo.jsx";
import App from "./App.jsx";
import Weather from "./pages/Weather.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/Weather",
    element: <Weather />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
