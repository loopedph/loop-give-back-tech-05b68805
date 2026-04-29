// Entry point used ONLY by the static SPA build (vite.static.config.ts).
// We render the landing page directly — no router, no SSR — which is all
// GitHub Pages needs for this single-page site.
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Route as IndexRoute } from "./routes/index";

const IndexComponent = IndexRoute.options.component as React.ComponentType;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IndexComponent />
  </React.StrictMode>,
);
