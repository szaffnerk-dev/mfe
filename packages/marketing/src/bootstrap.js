import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    el,
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_feed-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
