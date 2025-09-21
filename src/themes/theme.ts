import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#2563eb" },
    secondary: { main: "#0ea5e9" },
    text: { primary: "#0f172a", secondary: "#475569" },
    background: { default: "#ffffff" },
  },
  typography: {
    fontFamily: ["Nunito", "Poppins"].join(","),
    h1: { fontWeight: 600, letterSpacing: "-0.02em" },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
});

export default theme;
