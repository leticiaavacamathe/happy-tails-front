import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyAnimalsListPage = lazy(
  () => import("../pages/AnimalsListPage/AnimalsListPage")
);

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyDetailPage = lazy(
  () => import("../pages/DetailPage/DetailPage")
);

export const AddAnimalPage = lazy(
  () => import("../pages/AddAnimalPage/AddAnimalPage")
);
