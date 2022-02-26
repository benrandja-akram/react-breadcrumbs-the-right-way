import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";

import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
