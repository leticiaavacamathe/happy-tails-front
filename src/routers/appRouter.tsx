import { RouteObject } from "react-router";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import {
  LazyAnimalsListPage,
  LazyLoginPage,
  LazyNotFoundPage,
} from "./lazyComponents";
import App from "../components/App/App";
import paths from "./paths";

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
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyAnimalsListPage />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense>
            <LazyNotFoundPage />,
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
