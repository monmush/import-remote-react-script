import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (import.meta.env.DEV) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default App;
