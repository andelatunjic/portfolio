import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import { OptionsProvider } from "./context/OptionsContext.jsx";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <BrowserRouter>
        <OptionsProvider>
          <App />
        </OptionsProvider>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
