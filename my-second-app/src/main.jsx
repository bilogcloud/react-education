import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import "./index.css";
import { ThemeContext } from "./providers/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext value="light">
        <App />
      </ThemeContext>
    </BrowserRouter>
  </StrictMode>,
);
