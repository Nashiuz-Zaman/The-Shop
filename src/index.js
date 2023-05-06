import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//context component
import { MediaQueryProvider } from "./contexts/MediaQueryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MediaQueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MediaQueryProvider>
  </React.StrictMode>
);
