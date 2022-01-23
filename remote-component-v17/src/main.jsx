import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const render = (container) => {
  if (container) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      container
    );
  }
};

export default render;
