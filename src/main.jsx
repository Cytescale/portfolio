import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MouseContext, MouseContextProvider } from "./utills";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
      <Analytics />
    </MouseContextProvider>
  </React.StrictMode>
);
