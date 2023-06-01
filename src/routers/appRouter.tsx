import { RouteObject } from "react-router";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import LazyLoginPage from "./lazyComponent";
import App from "../components/App/App";

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
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
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
