import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo.jsx";
import App from "./App.jsx";
import Weather from "./pages/Weather.jsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Todo",
    element: <Todo />,
  },
  {
    path: "/Weather",
    element: <Weather />,
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
