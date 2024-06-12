import {Toaster} from "react-hot-toast";
import {BrowserRouter as Router} from "react-router-dom";
import {alpha, createTheme, ThemeProvider} from "@mui/material";

import AppRoutes from "./routers/app-routes.tsx";

import "./styles/global.scss";

// Config theme for MUI
// https://mui.com/material-ui/customization/palette/#custom-colors
let theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#fff",
        },
      },
    },
  },
});
theme = createTheme(theme, {
  palette: {
    primary: {
      main: "#23587b",
    },
    secondary: {
      main: "#57cc99",
      dark: alpha("#57cc99", 0.7), // Config color for event hover
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
    },
    background: {
      default: "#fff",
    },
    access: theme.palette.augmentColor({
      color: {
        main: "#38a3a5",
        "200": "#80ed99",
        "300": "#c7f9cc",
        "400": "#174444",
      },
      name: "access",
    }),
    static: theme.palette.augmentColor({
      color: {
        main: "#f7f7f7",
      },
      name: "static",
    }),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;
