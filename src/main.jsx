import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#67b4ff",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          transition: "color 300ms ease-in-out",
          "&:hover": {
            color: "#baedf9",
          },
          "&.Mui-selected": {
            color: "#67b4ff",
            cursor: "default",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "color 300ms ease-in-out, transform 300ms ease-in-out",
          "&:hover": {
            color: "#fff",
            transform: "translate-x: 10px",
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter
            future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
          >
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);