import React from "react";
import ReactDOM from "react-dom/client";

// 👇 ADD THESE TWO LINES
import "./styles/variables.css";
import "./styles/global.css";

// (you can keep index.css if you want, but it's optional)
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
