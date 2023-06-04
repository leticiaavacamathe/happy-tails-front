import { RouteObject } from "react-router";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import LazyLoginPage from "./lazyComponent";
import App from "../components/App/App";
import paths from "./paths";
import AnimalsListPage from "../pages/AnimalsListPage/AnimalsListPage";

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
        path: `${paths.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.home}`,
        element: <AnimalsListPage />,
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
