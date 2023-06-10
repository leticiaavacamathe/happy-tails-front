import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { animalsMocks } from "./animalMocks";
import paths from "../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: tokenMock,
      })
    );
  }),

  rest.get(`${apiUrl}/animals`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animals: animalsMocks }));
  }),

  rest.delete(`${apiUrl}${paths.animals}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "The animal has been deleted",
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}${paths.animals}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "The animal hasn't been deleted please try again",
      })
    );
  }),
];
