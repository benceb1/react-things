import React from "react";
import { render } from "react-dom";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend';

import CssBaseline from '@material-ui/core/CssBaseline';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "de"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "querystring", "cookie", "localStorage", "path", "subdomain" /*, 'sessionStorage', 'navigator'*/ ],
      caches: ["cookie"]
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json"
    },
    react: { useSuspense: false }
  });


render(
<>
  <CssBaseline />
  <App />
</>, document.getElementById("root"));
