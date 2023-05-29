import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
