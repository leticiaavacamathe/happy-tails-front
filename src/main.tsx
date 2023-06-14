import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
