import { RouteObject } from "react-router";
import App from "../components/App/App";
import { createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
