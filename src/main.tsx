import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@themes/theme.ts";
import { ToastContainer } from "react-toastify";
import "./i18n.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer autoClose={2000} theme="dark" />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
