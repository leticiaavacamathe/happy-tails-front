import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyAnimalsListPage = lazy(
  () => import("../pages/AnimalsListPage/AnimalsListPage")
);
