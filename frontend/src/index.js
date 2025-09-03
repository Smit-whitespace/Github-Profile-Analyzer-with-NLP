import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/variables.css";

import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
