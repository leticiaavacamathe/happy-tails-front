import { rest } from "msw";
import { tokenMock } from "./userMocks";
import { animalSingleMock, animalsMocks } from "./animalMocks";
import paths from "../routers/paths";
import { notLoadAnimal } from "../components/Modal/feedback";

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

  rest.get(`${apiUrl}${paths.animals}/:idAnimal`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ animal: animalSingleMock }));
  }),

  rest.delete(`${apiUrl}${paths.animals}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: "The animal has been deleted",
      })
    );
  }),

  rest.post(`${apiUrl}${paths.animals}/add`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ animal: animalsMocks[0] }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.get(`${apiUrl}/animals`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.get(`${apiUrl}/animals/:idAnimal`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ error: notLoadAnimal.text }));
  }),

  rest.delete(`${apiUrl}${paths.animals}/*`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        message: "The animal hasn't been deleted please try again",
      })
    );
  }),
  rest.post(`${apiUrl}${paths.animals}/add`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
