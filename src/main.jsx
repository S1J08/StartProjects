import { createRoot } from "react-dom/client";
import "./styles/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todo from "./pages/Todo.jsx";
import App from "./App.jsx";
import Weather from "./pages/Weather.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout.jsx";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/Todo",
//     element: <Todo />,
//   },
//   {
//     path: "/Weather",
//     element: <Weather />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Оборачиваем все страницы в Layout
    children: [
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
