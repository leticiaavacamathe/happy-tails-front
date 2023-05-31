import { RouteObject } from "react-router";
import App from "../components/App/App";
import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <p>Page not found</p>,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
