import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./init_i18n";
import "bootstrap/dist/css/bootstrap.min.css";

import CssBaseline from "@material-ui/core/CssBaseline";

import { AuthProvider } from "./context/AuthContext";
import App from "./App";

render(
  <>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </>,
  document.getElementById("root")
);

/**
 *
 *  json-server --watch data/db.json --port 8000
 */
